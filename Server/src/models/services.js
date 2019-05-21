const mongoose=require('mongoose');

const serviceSchema=new mongoose.Schema({
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    car_model:{
        type:String,
        required:true,
    },
    model_year:{
        type:String,
    },
    appointment:
    {
        type:Date,
    },
    address:{
        type:String,
    },
    s_type:{
        type:String,
    },
    summary:{
        type:String,
    },
    purchased:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    created:{
        type:Date,
        default:Date.now,
    },

});

module.exports=mongoose.model('Service',serviceSchema);