const express = require('express')
const cors = require('cors')
const app = express()

//configuration
app.set('port',process.env.PORT || 4000) //simple set to port by env or 4000 

//middlewares
app.use(cors()) 
app.use(express.json())

//routes

app.get('/',(req,res) => {
    res.send('Welcome to my API')
})

module.exports = app //export app