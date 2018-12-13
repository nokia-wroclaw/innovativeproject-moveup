const Sequelize = require('sequelize');
const db = require('../basedata/basedata');

Event = db.sequelize.define(
    'event',
    {
        id_event: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
                type: Sequelize.INTEGER,
                foreignKey: true,
            },
            name_event: {
            allowNull: false,
            type: Sequelize.STRING
        },
        start_point: {
            allowNull: false,
            type: Sequelize.STRING
        },
        type_sport: {
            allowNull: false,
            type: Sequelize.STRING
        },
        date: {
            allowNull: false,
            type: Sequelize.DATE
        },
        time: {
            allowNull: false,
            type: Sequelize.TIME
        },
        pref_age: {
            allowNull: true,
            type: Sequelize.TEXT
        },
        pref_sex: {
            allowNull: true,
            type: Sequelize.STRING
        },
        advanced: {
            allowNull: true,
            type: Sequelize.STRING
        },
        repetition: {
            allowNull: true,
            type: Sequelize.STRING
        },
        phone_organizer: {
            allowNull: true,
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)

module.exports = Event;