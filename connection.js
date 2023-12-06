const sequelize = require('sequelize')
require('dotenv').config()

const db = new sequelize.Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'viaduct.proxy.rlwy.net',
    port: process.env.DB_PORT,
    dialect : 'mysql'
})

module.exports = db
