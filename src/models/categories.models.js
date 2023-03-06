const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Category = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: false,
});

module.exports = Category;