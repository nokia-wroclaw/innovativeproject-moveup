const Sequelize = require('sequelize');
const db = require('../basedata/basedata');

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            allowNull: true,
            type: Sequelize.STRING
        },
        last_name: {
            allowNull: true,
            type: Sequelize.STRING
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING
        },
        created: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        age: {
            allowNull: true,
            type: Sequelize.DATE
        },
        sex: {
            allowNull: true,
            type: Sequelize.STRING
        },
        number_phone: {
            allowNull: true,
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)

