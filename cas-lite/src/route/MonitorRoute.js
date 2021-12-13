const express = require('express');
const { saveProcessDetails } = require('../controller/MonitorController');
const router = express.Router();

router.post('/save/processDetails', saveProcessDetails)

module.exports = router;