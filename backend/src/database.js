const mongoose = require('mongoose')

// connect to the database

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://mongodb/databasetest'

mongoose.connect(URI)

const connection = mongoose.connection //get the connection
connection.once('open', () => {
    console.log('MongoDB is connected', URI)
})