const mongoose = require("mongoose")
const connectDB = rul => {
  return mongoose
  .connect(url)
  .then(() => {
    console.log("connect to DB...");
  })
  .catch((err) => {
    console.log(err);
  })
}

module.exports = connectDB