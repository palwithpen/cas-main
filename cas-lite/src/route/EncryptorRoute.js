const express = require('express');
const { encrypt, decrypt } = require('../utils/Encryptor');
const router = express.Router();

router.post('/encrypt',(req,res,next)=>{
    const {value,key} = req.body;
    res.send(encrypt(value,key))
})

router.post('/decrypt',(req,res,next)=>{
    const {value,key} = req.body;
    res.send(decrypt(value,key))
})

module.exports = router;