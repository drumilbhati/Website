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
    },
    membership: {
        type: String,
        enum: ["None", "Level1", "Level2", "Level3"],
        default: "None",
    },
    donation: {
        type: Number,
        default: 0,
    }
});

const User = mongoose.model("User", userSchema);
export default User;