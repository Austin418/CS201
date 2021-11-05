// create 2 routes
// 1 for /dashboard GET
// 1 for /login POST

// const { Router } = require('express')
const express = require('express')
const { login, dashboard } = require('../controllers/login')

const authMiddleware = require('../middleware/auth')
router = express.Router()
router.route('/dashboard').get(dashboard)
router.route('/login').post(login)

module.exports = router