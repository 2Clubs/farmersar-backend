/////////////////////////////
// DEPENDENCIES
/////////////////////////////
const express = require('express')
const customersRouter = express.Router()
const Customer = require('../models/customers')

/////////////////////////////
// ROUTES
/////////////////////////////
// Index
customersRouter.get('/', async (req, res) => {
    try {
        res.json(await Customer.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})
// Create
customersRouter.post('/', async (req, res) => {
    try {
        res.json(await Customer.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})
module.exports = customersRouter