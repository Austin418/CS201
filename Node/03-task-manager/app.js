require("./db/connect")

const express = require("express")
const { connect } = require("mongoose")
const app = express()
require('dotenv').config()

const taskRoute = require("./routes/tasksRoute")

app

.use(express.static('./public'))

.use([express.urlencoded({ extended: false }), express.json()])

.use('/api/v1/tasks', taskRoute)

const startServer = async () => {
  try{
    await connect(process.env.mongo_URL)
    app.listen(3000, () => {
      console.log('listening at 3000...');
    })
  } catch(err){
    console.log(err);
  }
}
startServer()

// .listen(3000, () => {
//   console.log('listening at 3000...');
// })