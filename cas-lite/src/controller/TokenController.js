const { TokenKeeperModel } = require("../schema/TokenKeeper")
const {API_RESPONSE} = require('../utils/ResponseGenerator')
const uuid = require("uuid")

const tokenVerification = async(req,res,next)=>{
    const token = req.body.token || req.query.token;
    if (!token) {return res.status(403).json(API_RESPONSE('unauthorized request',403))}
    
    const fetchedToken = await TokenKeeperModel.findOne({status:'active'});
    try {
        if(token!=fetchedToken.token) {
            return res.status(400).json(API_RESPONSE('invalid token',400));
        }    
    } catch (error) {
        tokenGenerator();
        return res.status(500).json(API_RESPONSE('Error occured while checking for token',500));
    }
    tokenExpiration(token);
    return next();
}

const fetchToken = async(req,res)=>{
    const fetchedToken = await TokenKeeperModel.findOne({status:'active'});
    const key = req.query.param || req.query.key;
    //śif (key != )
    if(fetchedToken.token=='' || fetchedToken.token==null)
        res.send(200).json(API_RESPONSE('success',200,{token:fetchedToken.token}))
    res.send(200).json(API_RESPONSE('Technical Error Occured, Please contact OPs','ERROR'))
}

const tokenExpiration = (token)=>{
    TokenKeeperModel.updateOne({token},{$set:{status:'inactive'}},()=>{});
    tokenGenerator();
}

const tokenGenerator =()=>{
    try {
        TokenKeeperModel.updateMany({},{$set:{status:'inactive'}},()=>{});
        TokenKeeperModel.create({token:uuid.v1()});
    } catch (error) {
        console.log(`${error}`)
    }
    console.log(`token generated successfully`)
}

module.exports={tokenGenerator,tokenVerification,fetchToken}