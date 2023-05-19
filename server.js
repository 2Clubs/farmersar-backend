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