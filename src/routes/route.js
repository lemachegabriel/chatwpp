const express = require('express');
const controller = require('../controllers/cont')
const routes = express.Router()

routes.post("/", controller.getMessage)
routes.get("/", controller.getTest)

module.exports = routes