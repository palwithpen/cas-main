const nodemailer = require('nodemailer');
const {SMTP} = require('../config')

const transporter = nodemailer.createTransport({
    host:SMTP.HOST,
    port:SMTP.PORT,
    secure:true,
    auth:{
        user:SMTP.USER,
        pass:SMTP.PASSKEY
    }
})

transporter.verify((error,success)=>{
    if (error){
        console.log(`Error establishing SMTP Connection:::: ${error}`)
    }else{
        console.log(' SMTP Connection Established Successfully')
    }
})

module.exports={transporter}