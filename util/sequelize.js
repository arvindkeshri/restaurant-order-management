const Sequelize = require('sequelize'); 

const sequelize = new Sequelize('sakila', 'root', 'arvind', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log
})

module.exports = sequelize;