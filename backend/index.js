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
app.use(cors({
  origin: ["https://expensetracker-frontend-sigma.vercel.app"],
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
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

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my server</h1>');
});

app.use((req, res) => {
  res.status(400).json({
    status: 'error',
    message: 'Page not Found'
  })
})