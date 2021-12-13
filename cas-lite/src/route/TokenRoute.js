const express = require('express');
const { tokenVerification, tokenGenerator, fetchToken} = require('../controller/TokenController');
const router = express.Router();
const cron = require('node-cron');

router.get('/fetch/token', fetchToken);
router.post('/verify/token', tokenVerification,(req,res)=>{res.send(`Got it`)});

cron.schedule('*/15 * * * *',tokenGenerator)

module.exports=router