const express = require('express')
const {login, sesion, logout} = require('../controller')
const {isAuth} = require('../utils/auth')
const router = express.Router();

router.get('/login', isAuth, login);
router.post('/login', sesion);
router.get('/logout', logout);

module.exports = router;

