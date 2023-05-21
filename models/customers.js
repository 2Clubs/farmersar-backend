const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema(
    {
        name: String,
        phoneNumber: String,
    },
    {timestamps: true}
)

const Spell = mongoose.model('Customer', customerSchema)

module.exports = Customer