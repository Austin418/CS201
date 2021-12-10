//create a function that returns a json with sucess
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "valerie.kemmer41@ethereal.email",
      pass: process.env.MAILERPASS,
    },
  });

  let info = await transporter.sendMail({
    to: "davidm8624@gmail.com",
    from: "dnefiofn@fieo.net",
    test: "testiting emailer",
    replyTo: "ebfuie@foe.net",
    subject: "nodemailer test",
    html: "<h1>HELLO</h1><p>test<em>lazy letters</em></p>",
  });
  res.json(info);
};
///////////////////////////////////////////////////////////homework
const resetPass = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "valerie.kemmer41@ethereal.email",
      pass: process.env.MAILERPASS,
    },
  });
  let randomPass = Math.floor(Math.random() * 696969)

  let info = await transporter.sendMail({
    to: "davidm8624@gmail.com",
    from: "dnefiofn@fieo.net",
    test: "testiting emailer",
    replyTo: "ebfuie@foe.net",
    subject: "nodemailer test",
    html: `${randomPass}`,
  });
  res.json(info)
};

module.exports = { sendEmail, resetPass };
