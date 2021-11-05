const {Router} = reqire('express')
const express = require("express")
const {createPeople} = require('../controllers/auth')
const router = express.Router()

const {createLogin} = require('./controllers/auth')

router.post('/', createLogin)