const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// for menuitem

router.post('/', async(req,res)=>{
    try{
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('new menu');
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error: 'internal server error'});

    }
})
router.get('/',async(req,res)=>{
    try{
        const menu = await MenuItem.find();
        console.log('menu fetched');
        res.status(200).json(menu)
        
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'internal server error'});
        
    }
})

router.get('/:taste', async(req,res)=>{
    try{
        const taste = req.params.taste; // extract taste from url parameter
        if(taste =='sweet' || taste == 'sour' || taste == 'spicy'){
            const response = await MenuItem.find({taste:taste})
            console.log('response fetched');
            res.status(200).json(response);
            
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
    })


    //comment added
module.exports = router;

