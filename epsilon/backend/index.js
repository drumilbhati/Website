import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import routes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json())

const port = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log(error.message));

app.use('/api/users', routes);

app.listen(port, () => console.log(`Server started on port ${port}`));