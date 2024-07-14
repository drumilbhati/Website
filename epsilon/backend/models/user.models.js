import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 1000000,
    }
});

const User = mongoose.model("User", userSchema);
export default User;