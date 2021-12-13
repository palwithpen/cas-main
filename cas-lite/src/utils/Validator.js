const SsoUser = require('../schema/SsoUser')

const UserExistance = (username) =>{
    try {
        const data = SsoUser.findOne({username:username});
        if (data.size>0){
            return true;
        }else{
            return false;
        }        
    } catch (error) {
        return false;
    }
}

module.exports ={UserExistance}