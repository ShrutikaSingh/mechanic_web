module.exports=require('./auth.js');
//#002
module.exports = {
    ...require('./auth'), //... spread operater so as to spread out every individual handler inside of auth {refers to the file handlers/auth.js}
    ...require('./poll')//for importing poll.js from handlers/poll.js
};



//next is ver imp to errors
module.exports.notFound=(res,req,next)=>{
 const err=new Error('not found');
 err.status=404;
 next(err);
};



//we are getting error res.status is not a function

module.exports.errors = (err,res,req,next)=> {
    res.status(err.status || 400).json(               //500 for any diff error like our server is broken //400 is standard error code it means something went wrong
        {
            err: err.message || 'Something went wrong'
         }
    );

};


