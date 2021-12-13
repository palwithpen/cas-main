require('dotenv').config();
const jwt = require('jsonwebtoken');

const tokenStack = [];

const authToken = (req,res,next) =>{
    //jwt.sign()
    const {authorization} = req.header;
    const token = authorization && authorization.split(' ')[1];
    if (token == null){
        return res.send(401);
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET , (err,userData) =>{
        if (err) return res.sendStatus(403);
        req.user = userData
        next()
    })
}

const generateToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expireToken = '1m'})
}

const authUser = (req,res) =>{
    const {username} = req.body;
    const userData = {'name':username};
    const accessToken = generateToken(userData);
    const refreshToken = jwt.sign(userData, process.env.REFRESH_TOKEN_SECRET);
    tokenStack.push(refreshToken)
    res.json({accessToken , refreshToken});
}

const token =(req,res,next)=>{
    const refreshToken=req.body.token;
    if (refreshToken == null){
        return res.sendStatus(401);
    }
    if (!tokenStack.includes(refreshToken)){
        return res.sendStatus(403);
    }
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET , (err,userData) =>{
        if (err) return res.sendStatus(403);
        const accessToken = generateToken(userData)
        req.user = userData
        next()
    })

}

module.exports ={generateToken , authUser}