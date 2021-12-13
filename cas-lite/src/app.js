const express = require('express');
const app = express();
const swaggerUi= require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const {PORT, MONGO} = require('../src/config');
const cas = require('./route/CasRoute');
const enc =require('./route/EncryptorRoute');
const monitor = require('./route/MonitorRoute');
const token = require('./route/TokenRoute')
const Mongoose = require('./utils/MultiConectionMDB');
const cron = require('node-cron')
require('dotenv').config();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:'*'
}))

/** CAS Router **/
app.use('/v2/cas',cas);

/** Encrytion Utility **/
app.use('/utils',enc);
app.use('/token',token);
app.use('/monitor',monitor)

/*Health check */
app.get('/health-check',(req,res)=>{
    res.json({status:"connected",description:'health-check',statusCode:'0000'});
});

/* --Unknown Route Handling */
app.all('*',(req,res)=>{
    res.json({statusCode:"404",status:"no_route_found"})
//     res.sendStatus(404).json({statusCode:"404",status:"no_route_found"});
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

module.exports= app;