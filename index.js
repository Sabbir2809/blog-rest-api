// Dependencies
const express = require('express');
const connectDB = require('./config/connectDB');
const authRouter = require('./routes/auth/authRoute');
const userRoute = require('./routes/userRoute');

const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth/', authRouter);
app.use('/api/users', userRoute);

// PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
  connectDB();
});
