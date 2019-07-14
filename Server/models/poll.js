const mongoose = require ('mongoose');


const optionSchema = new mongoose.Schema({
    option:String,
    votes:
    {
        type:Number,
        default:0,
    },    
}
);

const pollSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    question:String,
    options:[optionSchema], //to refer optionSchema above
    voted:[{type: mongoose.Schema.Types.ObjectId,ref:'User'}], //The ref option is what tells Mongoose which model to use during population,
    created:{
        type:Date,
        default:Date.now,
    },
});



module.exports = mongoose.model('Poll', pollSchema);
