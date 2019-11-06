const express = require('express');
const usersController = require('../controllers/usersController')
const usersRouter = express.Router();

usersRouter.post('/login', usersController.login)
usersRouter.post('/create', usersController.create) // TODO Validation

module.exports = usersRouter;