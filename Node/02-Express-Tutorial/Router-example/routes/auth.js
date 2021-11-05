const express = require("express")
const router = express.Router()

app.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body
  if (name) {
    return res.status(201).send(`Welcome ${name}`)
  }
  res.status(400).json({ success: false, msg: 'please provide a name' })
})

module.exports = router