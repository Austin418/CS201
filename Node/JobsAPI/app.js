//enviroment setup
require('dotenv').config()
require("express-async-errors")

//App cors
const express = require('express')
const app = express()
const connectDB = require('./db/connect')


//extra securtiry
const rateLimiter = require('express-rate-limit')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')

//routes
const authRouter = require('./routes/auth')
const jobRouter = require('./routes/jobs')


//middleware
const auth = require('./middleware/auth')
const notFoundError = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//swaggerUI
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
swaggerDocs = YAML.load('./swagger.yaml')


//Variable Declarations
const port = process.env.PORT || 3000
const minutes = 1000 * 60

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
.get('/', (req, res) => {
  res.send('<h1>Jobs API<h1/><a href="/api-docs>Documentation</a>')
})
.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
.use(express.static("./public"))
.use('/api/v1/jobs', auth, jobRouter)
.use('/api/v1/auth', authRouter)

.use(notFoundError)
.use(errorHandlerMiddleware)



// 
const { notFound } = require('http-errors')
// 


// const port = process.env.PORT || 3000
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