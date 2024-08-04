import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT || 3000;
const DB = process.env.MONGO_ULI;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

async function startServer() {
  try {
    await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database is connected');

    app.listen(PORT, () => {
      console.log(`Server is live on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database or start server', error);
  }
}


startServer();

//routes
app.use('/api/auth', authRouter)

app.use('/', (req, res) => {
  res.status(400).json({
    status: 'success',
    message: 'welcome to my server'
  })
})
app.use((req, res) => {
  res.status(400).json({
    status: 'error',
    message: 'Page not Found'
  })
})