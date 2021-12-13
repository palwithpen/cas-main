const { processListModel } = require("../schema/ProcessList");

const saveProcessDetails = (req,res,next)=>{
    console.log(`Inside ${__filename} saveProcessDetails`);
    try {
        processListModel.create(req.body);
        res.send('data_saved');        
    } catch (error) {
        console.error(`Exception in ${__filename} saveProcessDetails:::` +error);
        res.send('data_save_failed');
    }
}

module.exports = {saveProcessDetails}