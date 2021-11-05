require('dotenv').config()
require("express-async-errors")

const express = require('express')
const app = express()
const routes = require('./routes')
const connectDB = require('./db/connect')


app
.use([
  express.urlencoded({extended: false}),
  express.json()
])
.use(express.static("./public"))
.use('/api/v1/jobs', routes)
.use('/api/v1/auth', routes)


const port = process.env.PORT || 3000
const start = async () => {
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server listening @${port}`);

    })
  }catch(error){
    console.log(error);
  }
}

start()