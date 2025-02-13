const express = require('express')
const cors = require('cors')
const app = express()

//configuration
app.set('port',process.env.PORT || 4000) //simple set to port by env or 4000 
module.exports = app //export app