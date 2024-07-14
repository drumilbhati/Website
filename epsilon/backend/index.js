import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded( { extended: true } ));

const port = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGO_URL;
const db = mongoose.connect(MONGO_URL);

app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
})

app.get('/api/jokes', (req, res) => {
    
const jokes = [
    {
        "joke": "Why did the chicken cross the road?",
        "answer": "To get to the other side!"
    },
    {
        "joke": "Why did the chicken cross the road?",
        "answer": "To get to the second side!"
    },
    {
        "joke": "Why did the chicken cross the road?",
        "answer": "To get to the third side!"
    }
    ];
    
    res.send(jokes);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));