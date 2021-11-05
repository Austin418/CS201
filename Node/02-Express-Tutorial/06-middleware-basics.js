const express = require('express')
const auth = require('./middleware/auth')
const app = express()

//logger middleware
const logger = require("./middleware/logger")
const morgan = require('morgan')


app
.use([morgan('tiny'), auth])
.get('/', (req, res) => {
  res.send('home page')
})
.get('/about', (req, res) =>{
  res.send("about page")
})

.listen(3000, () => console.log("server listening at 3000..."))