const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

// debugging
const logger = require('morgan');
app.use(logger("dev"));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}))

// session
const session = require('express-session');

//TODO persistence using a session store

app.use(express.static('build'));
app.use(session({
	secret: "secretSession",
	resave: true,
	saveUninitialized: true,
	cookie: {
		originalMaxAge: null,
  	maxAge: 60 * 60 * 1000, //milliseconds
    httpOnly: true,
		// secure: true, // HTTPS
	}
}))

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname + '../index.html'))
})
app.get('/register', (req, res) => {
	res.sendFile(path.join(__dirname + '../index.html'))
})

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '../index.html'))
})

const usersRoute = require('./routes/users')
app.use('/auth', usersRoute)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))