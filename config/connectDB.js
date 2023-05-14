// Dependencies
const mongoose = require('mongoose');

// server connection with mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('Database Connection Success');
  } catch (error) {
    console.log('Database Connection Fail!', error);
  }
};

// export connectDB
module.exports = connectDB;
