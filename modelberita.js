const db = require('./connection')
const sequelize = require('sequelize');

const berita = db.define('berita', {
    ID_berita: {type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Judul_Berita: {type: sequelize.DataTypes.STRING},
    Image: {type: sequelize.DataTypes.STRING},
    Author: {type: sequelize.DataTypes.STRING},
    Detail_berita:{type: sequelize.DataTypes.TEXT},
    kategori :{type: sequelize.DataTypes.STRING}
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = berita;