const express = require('express');
const controller = require('../controllers/cont')
const routes = express.Router()

routes.post("/webhook", controller.getMessage)

module.exports = routes