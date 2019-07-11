const jwt=require('jsonwebtoken');

const db = require('../models');//it comes from model directory//before anything we will be needing our database
//so we are using our db that will be asynchronous

//we use directly exports instead of module.exports cauz in our handlers/index.js we are actually spreading it out using ...
//so auth.js will be exports  and handlers/index.js will be module.exports

// for users to register using username and password
exports.register = async(req,res,next) =>{ //async db , async always uses try catch //this way we will not need to do promises and callbacks
try{
 const user= await db.User.create(req.body);//we need to create user i register since currently our database has no users & we r gonna create user using based on the body of request
 const {id,username}=user;

const token=jwt.sign({id,username},process.env.SECRET);
// const token=jwt.sign({id,username}.SECRET);
res.status(201).json({
    id,
    username,
    token
});//200 for default ok //201 means somthing has been created

}
catch(err){
  if(err.code===11000){ //11000 is the error code provided by mongodb for user already exists  
      err.message='sorry, that user already exists';
  }
    next(err);
 }
};

//for users to login using username and psswd
exports.login= async (req,res,next) => {
    try{
    const  user=await db.User.findOne({username : req.body.username}); //for login we actually have to find user for that we are using findone method we actually find the username that matches with the body of request
    //now we have to check if its the correct user
    const {id,username} =user; //destructuring
    const valid= await user.comparePassword(req.body.password); //match the password of the req.body that we get

    if(valid){ //if the valid returns true we will return id and username
       const token=jwt.sign({id,username},process.env.SECRET);
       //const token=jwt.sign({id,username}.SECRET);
        res.json({
            id,
            username,
            token   //weare sending the token also in response
        });
        console.log('Login successfull');
    }
    else{ //if invalid
        throw new Error();
    }
    }catch(err){
        err.message='invalid username/Password';
        next(err);
    }
}; //now go to postmane and check post for localhost:5000/api/auth/login

