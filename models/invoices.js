const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceSchema = new Schema(
    {
        invoiceNumber: Number,
        description: String,
        amount: Number,
    },
    {timestamps: true}
)

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer