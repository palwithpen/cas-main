const { Schema } = require("mongoose");
const {connector} = require('../utils/MultiConectionMDB');
const {MONGO} = require('../config')
const processListSchema = new Schema({
    host:{type:String, required:true},
    moduleType:{type:String, required:true},
    modulePath:{type:String, required:true},
    moduleName:{type:String, required:true},
    createdBy:{type:String, required:true},
    createdAt:{type:Date , default: Date()}
})

const processListModel = connector(MONGO.CONNECTION_URL_APP).model('process_details',processListSchema)

module.exports = {processListModel}