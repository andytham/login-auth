const express = require('express');
const app = express();
const path = require('path');

const logger = require('morgan');
const PORT = process.env.PORT || 8080;
app.use(logger("dev"));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(express.static('build'));


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