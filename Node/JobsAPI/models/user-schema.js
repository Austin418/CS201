const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    ],
    maxlength: 50,
    minlength: 3,
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    // maxlength: 12,
    minlength: 6,
  },
})



userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
  next();
})

userSchema.methods.comparePassword = async function (submittedPassword) {
  const isMatch = await bcrypt.compare(submittedPassword, this.password);
  return isMatch;
};

userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userID: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};


module.exports = mongoose.model("user", userSchema);
