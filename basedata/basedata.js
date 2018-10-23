const Sequelize = require('sequelize');
const db = {};
const  sequelize = new Sequelize("moja_baza",'root','', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.authenticate().then(function(error) {
    console.log('Polaczenie z baza udane');
})
.catch(function(error) {
    console.log('Polaczenie zle!' + error);
});

module.exports = db;