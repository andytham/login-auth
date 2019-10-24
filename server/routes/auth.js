const db = require('../db/config');
const bcrypt = require('bcrypt');
const saltRounds = 10;
// Models
const Users = {
	findAll: () => {
		return db.query(
			`
				SELECT * FROM users
			`
		)
	},
	create: user => {
		return db.one(
			`
				INSERT INTO users
				(username, password, email)
				VALUES ($1, $2, $3)
				RETURNING *
			`,
			[user.username, user.password, user.email]
		)
	},
	find: user => {
		return db.oneOrNone(
			`
				SELECT * FROM users
				WHERE username = $1
			`,
			[user.username]
		)
	}
}

const usersController = {
	index: () => {

	},
	create: (req, res) => {
		let password = req.body.password,
			email = req.body.email,
			username = req.body.username
		bcrypt.genSalt(saltRounds, function(err, salt) {
			bcrypt.hash(password, salt, function(err, hash){
				Users.create({
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
	}
	
}