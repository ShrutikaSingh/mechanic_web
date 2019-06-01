const mongoose=require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        reuired:true,
        min:10,
    },
    created:{
        type:Date,
        default:Date.now,
    },
    service:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Service',
        required:true,
    }], 
});

module.exports=mongoose.model('User',userSchema)