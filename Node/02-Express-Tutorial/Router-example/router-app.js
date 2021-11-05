const express = require("express")
const app = express()

const auth = require('./routes/auth')

app.use(express.static('../public'))
.use([express.urlencoded({extended: false}), express.json()])

.use('/login', auth)

.listen(3000, () =>{
   console.log(`Listening at 3000... `);
})