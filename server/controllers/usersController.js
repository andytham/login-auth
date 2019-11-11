const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const usersController = {
	index: () => {

	},
	create: (req, res) => {
		let password = req.body.password,
			email = req.body.email,
			username = req.body.username
		bcrypt.genSalt(saltRounds, function(err, salt) {
			bcrypt.hash(password, salt, function(err, hash){
				User.create({
					username: username,
					password: hash,
					email: email
				}).then(user => {
					res.json({
						msg: "User creation success.",
						success: true
					})
				}).catch(err => {
					res.json({
						msg: "Error.",
						success: false
					})
				})
			})
		})	
	},
	login: (req, res) => {
		User.find({
			username: req.body.username
		}).then(user => {
			bcrypt.compare(req.body.password, user.password, function(err, bcryptRes){
				if (bcryptRes){
					let token = jwt.sign({
						exp: Math.floor(Date.now() / 1000) + (60 * 60),
						user: req.body.username
					}, "secret") // secret should be in env
					req.session.token = token;
					req.session.user = req.body.username
					console.log("Login successful.")
					res.json({
						msg: "Login successful.",
						success: true
					})
				} else {
					console.log("Wrong username/password.")
					res.status(401).send("Wrong username/password.")
				}
			})
		}).catch(err => {
			console.log("User not found.");
			res.status(401).send("User not found.")
		})
	},
	restore: (req, res) => {
		// Check if there is an existing session
		if(req.session.token){
			jwt.verify(req.session.token, "secret", function(err, decoded){
				if(err){
					console.log("Invalid token.");
					res.status(401).send("Invalid token.")
				// } else if (req.body.username == decoded.user) {
				} else {
					console.log(`Currently logged in as ${decoded.user}.`);
					res.json({
						user: decoded.user,
						success: true
					})
				}
			})
		} else {
			console.log("No token.")
		}
	},
	logout: (req, res) => {
		console.log(req.session);
		req.session.destroy(function(err) {
			console.log(err);
		})
	}
}

module.exports = usersController;