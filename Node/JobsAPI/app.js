require('dotenv').config()
require("express-async-errors")

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const authRouter = require('./routes/auth')
const jobRouter = require('./routes/jobs')
const auth = require('./middleware/auth')
const notFoundError = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const rateLimiter = require('express-rate-limit')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')

app
.use(rateLimiter({
  windowMs: 1000 *60 * 15,
  max: 100
}))
.use([
  express.urlencoded({extended: false}),
  express.json()
])
.use(helmet())
.use(cors())
.use(xss())
.use(express.static("./public"))
.use('/api/v1/jobs', auth, jobRouter)
.use('/api/v1/auth', authRouter)

.use(notFoundError)
.use(errorHandlerMiddleware)



// 
const { notFound } = require('http-errors')
// 


const port = process.env.PORT || 3000
const startup = async () => {
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server listening @${port}`);

    })
  }catch(err){
    console.log(err);
  }
}

startup()