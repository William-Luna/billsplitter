const config = require('./utilities/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')

// const billsRouter = require('./controllers/bills')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utilities/middleware')

const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect(config.mongoUrl)

app.use(cors())
app.use(express.json())
app.use(middleware.tokenExtractor)
// app.use('/api/bills', billsRouter)
app.use('/api/users', usersRouter)
app.use('/login', loginRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app