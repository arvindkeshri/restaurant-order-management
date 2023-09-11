const Sequelize = require('sequelize');
const sequelize = require('../util/sequelize');

const Orders =sequelize.define('orders', {
    price: {type: Sequelize.FLOAT},
    dish:{type: Sequelize.STRING},
    table: {type: Sequelize.STRING}
    }, 
    { timestamps: false} //disables createdat and updatedat
)

module.exports = Orders;
