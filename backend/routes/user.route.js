const express=require('express');
const UserModel = require('../models/user.model');
const user=express.Router();


// get
user.get('/',async(req,res)=>{
    try {
        const data=await UserModel.find();
        res.status(200).send({"data":data});
    } catch (error) {
        res.status(404).send({"message":"failed to get user data."})
    }
});

// get single user
user.get('/:id',async(req,res)=>{
    try {
        const data=await UserModel.findOne({"_id":req.params.id});
        res.status(200).send({"user":data});
    } catch (error) {
        res.status(404).send({"message":"failed to get user data."})
    }
});

// post
user.post('/addUser',async(req,res)=>{
    const {name,email,phone}=req.body;

    try {
        if(!name || !email || !phone){
        res.status(404).send({"message":"information is missing."})
        }else
        {
            const user=new UserModel(req.body)
            await user.save();
            res.status(202).send({"message":"User is added successfully."});
        }

    } catch (error) {
        
        res.status(404).send({"message":"failed to add the user."});

    }
});

// put
user.put('/update/:id',async(req,res)=>{

    try {
        await UserModel.findByIdAndUpdate({"_id":req.params.id},req.body);
        res.status(202).send({"message":"user data is being updated."});
    } catch (error) {
        res.status(404).send({"message":"failed to update the user data."});
    }
});

// delete
user.delete('/delete/:id',async(req,res)=>{

    try {
        await UserModel.findByIdAndDelete({"_id":req.params.id});
        res.status(200).send({"message":"user data is being is deleted."});
    } catch (error) {
        res.status(404).send({"message":"failed to delete the data."});
    }
});


module.exports=user;