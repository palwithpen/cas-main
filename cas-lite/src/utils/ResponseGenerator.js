const { SMTP, CLIENT, HOST, PASS_RESET_LINK } = require("../config");

const API_RESPONSE = (status, statusCode,data) =>{
    const response = {status,statusCode,data}
    return response;
}

const  MAIL_BODY  ={
    from:SMTP.MAIL,
    to : 'user_mail',
    subject: 'Password Reset For CAS User',
    text:`Dear User,
            This Mail is in regards of reseting your password for ${CLIENT}.
            Please click on below link to reset your password:::::::
            ${HOST}${PASS_RESET_LINK}

            If you haven't tried changing your password then please contact Admin.

            Best Regards,
            Cas Admin
    `

}
module.exports={API_RESPONSE , MAIL_BODY}