const express = require('express');
const Order = require('../models/order');
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=>{
    const htmlPath = path.join(__dirname, '..', 'views', 'index.html'); 
    console.log(htmlPath); 
    res.sendFile(htmlPath);
})

router.post('/', async(req, res)=>{
    console.log(req.body);
    try{
        const {price, dish, table} = req.body;
        const newStudent = await Order.create({price, dish, table});
        //res.send('Data inserted to the table');
        res.redirect('/');
    }
     catch(err){
         console.log("Unable to insert data to the table", err);
         res.status(500).send("Unable to insert data to the table"+err);
    }
})

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