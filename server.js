/////////////////////////////
// DEPENDENCIES
/////////////////////////////
// .env variables
require('dotenv').config()
// pull PORT from .env; default of 4000
const { PORT = 4000 } = process.env
// import express
const express = require('express')
// create express object
const app = express()
// import mongoose
const mongoose = require('mongoose')
// import middleware
const cors = require('cors')
const morgan = require('morgan')

/////////////////////////////
// DATABASE CONNECTION
/////////////////////////////
// Establish Connection
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
// Connection Events
mongoose.connection
    .on('open', () => console.log('Connected to mongoose'))
    .on('close', () => console.log('Disconnected from mongoose'))
    .on('error', (error) => console.log(error))

/////////////////////////////
// MODELS
/////////////////////////////

/////////////////////////////
// ROUTES
/////////////////////////////
// root route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

/////////////////////////////
// LISTENER
/////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))