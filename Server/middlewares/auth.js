const jwt= require('jsonwebtoken');
//decode the token


module.exports = (req,res,next)=>{ //req,res,next just like other middle ware use if else
if(req.headers.authorization){
    // `Bearer  dsdhsjcshjbshcsb` 
    const token=req.headers.authorization.split(' ')[1];
    jwt.verify(token,process.env.SECRET,(err, decoded)=>{
        if(err){
            next(Error('Failed to authenticate token'));
        }else{
            req.decoded=decoded;
            next();
        }
    });
}
else{
    next(Error('No token provided'))
}
}