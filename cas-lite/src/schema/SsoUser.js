const { mongo, Schema, model } = require("mongoose");
const { MONGO } = require("../config");
const { connector } = require("../utils/MultiConectionMDB");

const SSOUserSchema = new Schema({
    username : String,
    passkey : String,
    email : String,
    contact : Number,
    userRole :Array,
    createdOn : {type:Date , default: Date.now()},
    createdBy : String,
})

const SSOUserModel = connector(MONGO.CONNECTION_URL_SSO).model('sso_users',SSOUserSchema)
module.exports = {SSOUserModel};