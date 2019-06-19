const jwt=require('jsonwebtoken');
const db=require('../models');

module.exports.register = async (req,res,next)=>{
    try{
        const user=await db.User.create(req.body); //we r gonna create user using based on the body of request
        const {id,username}=user;
        res.status(201).json({id,username});//display id and username
    }
    catch(err){//  checkout more error codes of mongo
        if(err.code=11000){ //11000 is the error code provided by mongodb for user already exists
            err.message="sorry,that user already exits";
        }
        next(err);
    };
}

module.exports.login= async (req,res,next)=>{
    try{
        const user= await db.User.findOne({username: req.body.username}); //for login we actually have to find user for that we are using findone method we actually find the username that matches with the body of request
        const {id,username}= user;
        const valid=await user.comparePassword(req.body.password); //match the password of the req.body that we get

        if(valid){//if the valid returns true we will return id and username
            res.json({id,username});
            console.log('login successful');
        }
        else{
            throw new Error();
        }
    }catch(err){
        err.message='invalid username or password'
        next(err);
    }
};


