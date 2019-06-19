const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

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

//INSTALL BCRYPT
//>npm install bcryptjs
userSchema.pre('save', async function(next){
    try{
            //if the password is no modified //if we are sending in correct password we r gonna check its correct or not
            //and in the case if nothing is changed in the database of psswd we just send dat to next function
        if(!this.isModified('password')){
            return next();
        }
//otherwise we gonna hash the password and the 10 used below is just the strength of the hashing
const hashed= await bcrypt.hash(this.password,10);
this.password= hashed;
}catch(err){
    return next(err);
}
});
module.exports=mongoose.model('User',userSchema)

