const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

// POST route to add the person
router.post('/',async (req,res) => {
   try{
     const data = req.body // assuming the request body contains the person data
    
    // create a new person document using the mongoose model
    const newPerson = new Person(data);

    // save new person to database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
   }
   catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error'}); // 500 , 200 are the status codes
    }
})

// GET method to get person
router.get('/', async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});

    }
})


router.get('/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType; // extract worktype from url parameter
        if(workType =='chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work:workType})
            console.log('response fetched');
            res.status(200).json(response);
            
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
    })


router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id; // extract id from url parameters
        const updatedPersonData = req.body; // updated data for the person

        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new: true, //return the updated document
        runValidators: true, // run mongoose validation
    })

    if(!response){
        return res.status(404).json({error: 'person not found'});
    }
    console.log('data updated');
    res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})

    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id; 

        // assuming u have a person model
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'person not found'});

        }
        console.log('data deleted');
        res.status(200).json({message: 'person deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})
module.exports = router;