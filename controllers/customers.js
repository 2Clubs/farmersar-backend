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
// Destroy
customersRouter.delete('/:id', async (req, res) => {
    try {
        res.json(await Customer.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})
// Update
customersRouter.put('/:id', async (req, res) => {
    try {
        res.json(await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true }))
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