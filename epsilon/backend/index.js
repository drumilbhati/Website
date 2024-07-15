import connectDB from "./db/db.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
});

const port = process.env.PORT || 8000;

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    }
    );
})
.catch((error) => {
    console.log(error);
    process.exit(1);
})