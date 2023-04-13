import dotenv from 'dotenv';
import express from 'express';
const app = express();
dotenv.config();

import connectDb from './db/connect.js';

//middleware

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.get('/', (req, res) => {
  res.send('welcome!');
});

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`server running on ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
