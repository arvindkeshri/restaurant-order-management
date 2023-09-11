const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const orderRoute = require('./routes/orderRoute')
const sequelize =  require('./util/sequelize');
const Order = require ('./models/order');

app.use(express.urlencoded({extended: true}))
app.use(express.json());

sequelize.sync().then(result=>{
    console.log(result);
}) 
.catch((err)=>{
    console.log(err);
})

app.use('/', orderRoute);

app.listen((3000), ()=>{
    console.log("Server running ok")
});
