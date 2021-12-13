const express = require('express');
const { loginUser, logoutUser, createCasUser, forgotPassword } = require('../controller/CasController');
const SsoUser = require('../schema/SsoUser')
const router = express.Router();

router.get('/', (req, res) => {});

router.post('/login', loginUser);

router.post('logout', logoutUser);

router.post('/createUser', createCasUser);

router.post('/forgotPassword')
module.exports = router;