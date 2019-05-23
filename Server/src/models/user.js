const mongoose=require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        reuired:true,
    },
    created:{
        type:Date,
        default:Date.now,
    },
    service:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Service',
    }], 
});

module.exports=mongoose.model('User',userSchema)