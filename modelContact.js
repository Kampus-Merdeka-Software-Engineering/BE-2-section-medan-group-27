const db = require('./connection');
const { Sequelize } = require('sequelize');

const contacts = db.define('contacts', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING},
    email: { type: Sequelize.STRING },
    message: { type: Sequelize.STRING }
}, {
    freezeTableName: true
});

module.exports = contacts;
