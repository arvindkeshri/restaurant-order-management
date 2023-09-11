const express = require('express');
const Order = require('../models/order');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');


router.get('/', (req, res)=>{
    const htmlPath = path.join(__dirname, '..', 'views', 'index.html'); 
    res.sendFile(htmlPath);
})

router.post('/', async(req, res)=>{
    console.log(req.body);
    try{
        const {price, dish, table} = req.body;
        const newOrder = await Order.create({price, dish, table});
        console.log('Data inserted to the table');
        res.redirect('/');
    }
     catch(err){
         console.log("Unable to insert data to the table", err);
         res.status(500).send("Unable to insert data to the table"+err);
    }
})

router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.findAll(); // Replace with your Sequelize query
        res.json(orders);
    } catch (err) {
        console.error("Error fetching orders:", err);
        res.status(500).json({ error: "Unable to fetch orders" });
    }
    
});

router.delete('/orders/:id', async(req, res)=>{
    try{
        const uid = req.params.id;
        const user =await Order.findByPk(uid);
        if(user){
            await user.destroy();
            res.redirect('/');
        }
        else res.json('User not found');
    }catch(err){
        res.json('Error deleting user:', err)
    }
})

module.exports = router;