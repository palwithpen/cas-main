const { Schema } = require("mongoose");
const { MONGO } = require("../config");
const { connector } = require("../utils/MultiConectionMDB");

const TokenKeeperSchema = new Schema({
    token: String,
    creationDate : {type: Date, default: Date.now()},
    status: {type:String , default: 'active'}
})

const TokenKeeperModel = connector(MONGO.CONNECTION_URL_SSO).model('token_keeper',TokenKeeperSchema)
module.exports={TokenKeeperModel}