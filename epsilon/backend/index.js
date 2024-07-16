// import connectDB from "./db/db.js";
// import dotenv from "dotenv";

// dotenv.config({
//     path: "./env"
// });

// const port = process.env.PORT || 8000;

// connectDB()
// .then(() => {
//     app.listen(port, () => {
//         console.log(`Server running on port ${port}`);
//     }
//     );
// })
// .catch((error) => {
//     console.log(error);
//     process.exit(1);
// })

import express from 'express';
import router from './router/user.router.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(router);

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

app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
  });