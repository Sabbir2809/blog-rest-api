// Dependencies
const mongoose = require('mongoose');

// connection with mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('Database Connection Success');
  } catch (error) {
    console.error('Database Connection Fail!', error);
  }
};

// export connectDB
module.exports = connectDB;
