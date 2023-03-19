const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const App = express()

App.use(cors())

// Status Log!
App.use(morgan('dev'))

// Getting Body Content
App.use(express.json())

// DB Router!
const CrudRouter = require('./router/crud')
App.use('/crud', CrudRouter)

// Listening!
App.listen(5000, () => {
  console.log('Server Running!')
})

// DB Connection
mongoose.connect('mongodb+srv://qmaze:qmaze%40123@qmaze.0mgvlti.mongodb.net/test', (err) => {
  if (!err) {
    console.log("DB Running!")
  }
})