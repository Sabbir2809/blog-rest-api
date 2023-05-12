const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('Database Connection Success');
  } catch (error) {
    console.error('Database Connection Fail!');
  }
};

module.exports = connectDB;
