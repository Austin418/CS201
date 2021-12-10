//imports

// const { application } = require("express");

//load up the .env file here
require("dotenv").config();
require("express-async-errors");
const sendEmail = require("./controller/sendEmail");
const resetPass = require("./controller/sendEmail");

const express = require("express");
const app = express();
//create your app
app
  .use(express.json())

  //create a path for home that returns an h1 with "email project" and a anchor with an href to /send that says send email
  .get("/", (req, res) => {
    res.send('<h1>email project</h1> <a href="/send">send email</a>');
  })
  .get("/send", sendEmail)
  .get("/reset", resetPass);
//create a route with a GET method to run sendEmail (controller) on /send route
//use your notFound and errorHandler middlewaress
//dont forget the json widdleware
//create your port variable
const port = process.env.PORT || 3000;
//create your app startup function
const start = () => {
  try {
    app.listen(port, console.log(`listening at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
//run the app startup function        the is no mongo db this time so skip that
