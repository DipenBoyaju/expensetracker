import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT;
const DB = process.env.MONGO_ULI;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

async function startServer() {
  try {
    await mongoose.connect(DB)
    console.log('Database is connected');

    app.listen(PORT, () => {
      console.log('Srerver is live');
    })

  } catch (error) {
    console.log(error);

  }
}

startServer();

//routes
app.use('/api/auth', authRouter)

app.use((req, res) => {
  res.status(400).json({
    status: 'error',
    message: 'Page not Found'
  })
})