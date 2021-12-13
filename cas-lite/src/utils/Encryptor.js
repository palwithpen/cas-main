const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken')
const encrypt = (value,key)=>{
    var e = CryptoJS.AES.encrypt(value,key)
    return e;
}

const decrypt = (value,key)=>{
    var d = CryptoJS.AES.decrypt(value,key)
    return d;
}

/**
 * JWT Sign
 */

const jwtSign = (data,key)=>{
    var token =jwt.sign(data,key);
    return token;
}

module.exports={
    encrypt,decrypt,jwtSign
}