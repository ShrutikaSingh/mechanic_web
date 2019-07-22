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
        type:Date,
    },
    appointment:
    {
        type:Date,
        default: Date.now,
    },
    address:{
        type:String,
        required:true,
    },
    s_type:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        max:100,
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


module.exports = mongoose.model('Service', serviceSchema);