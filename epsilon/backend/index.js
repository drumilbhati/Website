import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()

app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

const MONGODB = process.env.MONGO_URL

mongoose.connect(MONGODB).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}).catch(err => console.log(err))
