import dotenv from 'dotenv';
import express from 'express';
import userRouter from './router/user.router.js';
import eventsRouter from './router/events.router.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(userRouter);
app.use(eventsRouter);
app.use(cors(
  {origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  }
));

mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log(error);
    process.exit(1);
});

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
  });