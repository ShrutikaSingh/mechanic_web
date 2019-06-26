const jwt= require('jsonwebtoken');
//decode the token


module.exports = (req,res,next)=>{ //req,res,next just like other middle ware use if else
if(){}
else{
    next(Error('No token provided'))
}
}