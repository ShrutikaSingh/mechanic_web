const mongoose=require('mongoose');
mongoose.set('debug',true);
mongoose.Promise=global.Promise;
const mongo_url='mongodb://localhost:27017/jack-my-motor'


//module.exports.connectDb=()=>{
//mongoose.connect(mongo_url);
//}

/*ß
module.exports.connectDb=()=>{
mongoose.connect(mongo_url).then(async() =>{
    console.log("mongo database connected");

});
}
*/

module.exports.connectDb=()=>{
    mongoose.connect(mongo_url).then(async() =>{
        if (eraseDatabaseOnSync) {
            await Promise.all([
              models.User.deleteMany({}),
              models.Message.deleteMany({}),
            ]);
        
            createUsersWithMessages();
          }



        console.log("mongo database connected");
    
    });
    };


    const createUsersWithMessages = async () => {
        const user1 = new models.User({
          username: 'rwieruch',
        });
      
        const message1 = new models.Message({
          text: 'Published the Road to learn React',
          user: user1.id,
        });
      
        await message1.save();
      
        await user1.save();
      };

   





//module.exports.User=require('./user');
//module.exports.Service=require('./services');

module.exports.connectDb;


/*
import mongoose from 'mongoose';
mongoose.set('debug',true);
mongoose.Promise=global.Promise;

import User from './user';
import Service from './services';

const connectDb  = () => 
{
   return mongoose.connect('mongodb://localhost:27017/jack-my-motor');

}

const models = { User, Service};


export { connectDb}
export default models;
*/
