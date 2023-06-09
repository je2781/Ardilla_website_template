const User = require('../models/user');

async function readData(){
  const users = await User.find().toArray();
  return users;
} 

async function writeData(data){
  const newUser = new User({
    email: data.email,
    password: data.password,
  });

  await newUser.save();  
}


exports.readData = readData;
exports.writeData = writeData;