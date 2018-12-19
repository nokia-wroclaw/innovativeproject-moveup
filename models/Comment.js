const Sequelize = require('sequelize');
const db = require('../basedata/basedata');

Comment = db.sequelize.define(
    'comment',
    {
        id_comment: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: Sequelize.INTEGER,
            foreignKey: true,
        },
        id_event: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        text: {
            allowNull: false,
            type: Sequelize.STRING
        },
        verification: {
            allowNull: false,
            type: Sequelize.ENUM('toConfirm', 'agree', 'disAgree'),
            defaultValue: 'toConfirm'
        },
    },
    {
        timestamps: false
    }
)
module.exports = Comment;