const { SMTP , API_KEY} = require('../config');
const {SSOUserModel } = require('../schema/SsoUser');
const { encrypt, jwtSign } = require('../utils/Encryptor');
const { API_RESPONSE, MAIL_BODY } = require('../utils/ResponseGenerator');
const { transporter } = require('../utils/SMTPConnector');
const { UserExistance } = require('../utils/Validator');

const loginUser = async(req, res,next) =>{
    const {username , passkey} = req.body;
    try {
        const userdata = await SSOUserModel.findOne({username:username});
        if (userdata.get('passkey')==passkey) {
            const response = {
                userRoles: userdata.get('userRole'),
                username:userdata.get('username'),
            }
            response.token = jwtSign(response,API_KEY)
            res.cookie("data",response.token)
            res.json(API_RESPONSE("success","0000",response));            
        } else {
            res.json(API_RESPONSE("username_or_password_invalid","ERR",null));
        }
    } catch (error) {
        console.log(error)
         res.json(API_RESPONSE("Technical Error","ERROR",error));
    }
}

const logoutUser = (req,res,next) =>{

}

const createCasUser = async(req,res,next)=>{
    try {
        await SSOUserModel.create(req.body)
        res.send("success");
    } catch (error) {
        console.error(error)
    };
}

const forgotPassword = async (req,res,next)=>{
    try {
        const userdata = await SSOUserModel.findOne({username:username})
        MAIL_BODY.from = userdata.get('email');
        if (UserExistance(username)){
            transporter.sendMail(MAIL_BODY,(error,data)=>{
                if (error){
                    res.json(API_RESPONSE('Technical Error Occured','ERR',error));
                } else{
                     res.json(API_RESPONSE('Rest Link Sent Successfully','200'));
                }
            })
        }else{
             res.json(API_RESPONSE('user_not_found','ERR'));
        }
    } catch (error) {
        res.json(API_RESPONSE('Technical Error Occured','ERR',error));        
    }
}

module.exports = {loginUser, logoutUser, createCasUser,forgotPassword}