// Dependencies
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const authRouter = require('./routes/auth/authRoute');
const userRouter = require('./routes/userRoute');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

// PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
  // mongodb connection
  connectDB();
});
