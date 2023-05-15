// Dependencies
const express = require('express');
require('dotenv').config();
const multer = require('multer');
const morgan = require('morgan');
const connectDB = require('./config/connectDB');
const authRouter = require('./routes/auth/authRoute');
const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
const categoryRouter = require('./routes/categoryRoute');

// app instance
const app = express();

// Middleware: Application Level
app.use(express.json());
app.use(morgan('dev'));

// Middleware: Router Level
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/category', categoryRouter);

// file upload by multer
const uploadStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './assets/images');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: uploadStorage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  // console.log(res.file);
  res.send('File Upload Successfully');
});

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
  // mongodb connection
  connectDB();
});
