/////////////////////////////
// DEPENDENCIES
/////////////////////////////
const express = require('express')
const invoicesRouter = express.Router()
const Invoice = require('../models/invoices')

/////////////////////////////
// ROUTES
/////////////////////////////
// Index
invoicesRouter.get('/', async (req, res) => {
    try {
        res.json(await Invoice.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})
// Destroy
invoicesRouter.delete('/:id', async (req, res) => {
    try {
        res.json(await Invoice.findByIdAndRemove(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})
// Update
invoicesRouter.put('/:id', async (req, res) => {
    try {
        res.json(await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    } catch (error) {
        res.status(400).json(error)
    }
})
// Create
invoicesRouter.post('/', async (req, res) => {
    try {
        res.json(await Invoice.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})
module.exports = invoicesRouter