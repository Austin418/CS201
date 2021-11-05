//login function returns a json with success

// const CustomAPIError = require("../errors/custom-error")
const BadRequestError = require('../errors')


const login = (req, res) => {
  const {username, password} = req.body
  // res.send("temp login/register/signup route")

  // there are 3 different ways to verify username/password
  // - Mongoose validation
  // - JOI
  // - Controller Checking

  if(!username || !password){
    throw new BadRequestError("please provide email and password")
  }

  const id = new Date().getDate()
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {
    expiresIn:"30d"
  })

  res.status({status: 200, msg: 'success', results: []})
}


// dashboard function returns a json with success
const dashboard = (req, res) => {
  throw new CustomAPIError('testing API', 404)
  res.json({status: 200, msg: req.username, secret: req.headers.authorization})
}

module.exports = {login,dashboard}