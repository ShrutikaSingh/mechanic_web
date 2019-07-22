const mongo_url='mongodb://localhost:27017/jack_my_motor'
const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
  mongoose.connect(mongo_url);

const db = require('./src/models');

const users = [
  { username: 'Khushi', password: 'password' },
  { username: 'username', password: 'password' },
  { username: 'kelvin', password: 'password' },
];


const seed = async () => {
  try {
   
    await db.User.remove();
    console.log('drop all users');
    
    await Promise.all(
      users.map(async user => {
        const data = await db.User.create(user);
        await data.save();
      }),
    );
    console.log('CREATED USERS', JSON.stringify(users));
  } catch (err) {
    console.error(err);
  }
};

seed();
