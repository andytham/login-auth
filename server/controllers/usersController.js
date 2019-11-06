const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/User')
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
	}	
}

module.exports = usersController;