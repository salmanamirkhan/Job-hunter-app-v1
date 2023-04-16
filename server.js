import dotenv from 'dotenv';
import express from 'express';
const app = express();
dotenv.config();
import 'express-async-errors';

//db and authentcateUser
import connectDb from './db/connect.js';

//routers

import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

//middleware

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome!');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

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
