const Mongoose  = require("mongoose");
const {MONGO} = require('../config')
function connect(schema) {
    Mongoose.connect(schema, {useNewUrlParser: true}).then(
        ()=> console.log(`======================>${schema}MONGO CONNECTION ESTABLISHED<======================`)
     ).catch(err =>{
         console.error(`Error Connecting Mongoose ${err}`)
     });  
} 

module.exports={connect}