const User = require('../models/user-schema')
const bcrypt = require('bcrypt')
const { BadRequestError, UnauthError } = require('../errors')
const register = async (req, res) => {
  //   //encrypting is storing your data behind a firewall
  //   //hashing which scrambles your data into a string of uniform size

  //   const { name, password, email} = req.body
  //   console.log(password);

  //   //salt = a random bit combination (101010010) that is included in the hash
  //   //the salt is then added to the hash so the verifier can check even with randomness
  //   //peper = adds a single letter [a-zA-Z] to the end of the password
  //   const salt = await bcrypt.genSalt(10)
  //   const hashpass = await bcrypt.hash(password,salt)
  //   // console.log(bcrypt.hash(password));


  const newUser = await User.create(req.body)
  const token = newUser.createJWT()

  res.json({ user: { name: newUser.name }, token })
}
const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('please provide a email AND password')
  }
  const userLogin = await User.findOne({ email })

  if (!userLogin) {
    throw new UnauthError('Invalid Credentials')
  }
  const isPasswordCorrect = await userLogin.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthError('Invalid Credentials')
  }
  const token = userLogin.createJWT()
  res.json({ user: { name: userLogin.name }, token })
}
module.exports = { register, login }