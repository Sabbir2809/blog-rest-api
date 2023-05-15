// Dependencies
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const authRouter = require('./routes/auth/authRoute');
const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
const categoryRouter = require('./routes/categoryRoute');

// app instance
const app = express();

// Middleware: Application Level
app.use(express.json());

// Middleware: Router Level
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/category', categoryRouter);

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
  // mongodb connection
  connectDB();
});
