const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'Medantech27'
})

module.exports = db