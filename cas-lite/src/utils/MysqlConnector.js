const mysql = require('mysql2');
const {MYSQL} = require('../config')
const MysqlConnector = mysql.createConnection({
    host:MYSQL.HOST,
    user:MYSQL.USER,
    password:MYSQL.PASSKEY,
    port:MYSQL.PASSKEY,
    database:"sso",
})

exports.MysqlConnector = MysqlConnector;