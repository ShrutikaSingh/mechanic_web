//handlers/poll.js
//our handler is going to import database therefore import models
const db=require('../models');
//use async await to show polls,**always use try catch in the async await
exports.showPolls=async(req,res,next) => {
    try{
        const polls= await db.Poll.find().populate('user',['username','id']); //populate here also//find everything //populate is how we use relation ships between differnt things (like here user and poll) in mongo
        res.status(200).json(polls)//200 for OK status and show the polls in json format
    }
    catch(err){
        err.status= 400;
        next(err);
    }
};

exports.userPolls=async (req,res,next)=>{
    try{
        const {id} = req.decoded;
        const user = await db.User.findById(id)
            .populate('polls');//find that user and add the polls by them in their database
            return res.status(200).json(user.polls);
    }
    catch(err){
        err.status=400;
        next(err);
    }
}

exports.createPolls=async (req,res,next)=>{
    try{
        console.log(req.decoded); //to see what being stored in this property
        const {id} = req.decoded; //destructuring
        const user=await db.User.findById(id);
        const {question, options} = req.body; //destructring req.body 
        const poll=await db.Poll.create({
        question,
        user,//send in the user first we have to find the user by id
        options: options.map(option => ({ option, //ERROR IN HERE
            // TypeError: Cannot read property 'map' of undefined
            votes: 0
        }))  
        });
        user.polls.push(poll._id);//we also want to make sure that  user polls attribute or property has the new poll that has been created
        await user.save(); //make sure we save our user
        res.status(201).json({...poll._doc, user : user._id}
            ) //._doc is the mongooses shorthand for the poll document it self
        //we have to spread the poll
        //201 is status for created    
    }
    catch(err)
    {
        err.status=400;
        next(err);
    }
}

exports.vote= async(req,res,next)=>{
    const {id: pollId} = req.params;
    const {id: userId} = req.decoded;
    const {answer}= req.body;
    
    try{
        if(answer){
            const poll= await db.Poll.findById(pollId);
            if(!poll)throw new Error('No poll found from this user');
            const vote=poll.option.map(
                option => option.option === answer 
                ? {
                    option: option.option,
                    _id: option._id,
                    votes:option.votes+1,
                }
                :option, //else option
            );
            console.log('VOTE:USERID',userId);
            console.log('VOTE:poll.voted',poll.voted);
            console.log(
                'VOTE: vote filter',
                poll.voted.filter(user => user.toString() === userId).length,
              );
        }

    }
    catch(err){
        err.status=400;
        next(err);
    }
}


exports.getPoll=async(req,res,next)=>{
    try{
        const {id} = req.params; //coming from request parameter
        const poll= await db.Poll.findById(id)
            .populate('user',['username','id',]); //populate the user and we want username and the id
        
        if(!poll)throw new Error('Not Found'); //if the poll doest not exist 
        return res.status(200).json(poll); //and respond with the poll
    }
    catch(err){
        err.status=400,
        next(err);
    }
};

exports.deletePoll= async (req,res,next)=>{
    const {id:pollId} = req.params;
    const {id:userId} = req.decoded;
    try{
        let user= await db.User.findById(userId)
        if(user.polls){
            user.polls = user.polls.filter(userPoll => {
                return userPoll._id.toString() !== pollId.toString()
            })
        }
        const poll = await db.Poll.findById(pollId);
        if(!poll) throw new Error('No Poll Found');
        if(poll.user.toString()!== userId){
            throw new Error('Unauthorized access');
        }
        await user.save()
        await poll.remove();
        return res.status(202).json({poll,deleted:true});
    }catch(err){
        return next({
            status:400,
            message: err.message,
        });
    }
};