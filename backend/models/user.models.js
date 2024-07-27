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
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    balance: {
        type: Number,
        default: 1000000,
    },
    membership: {
        type: String,
        enum: ["None", "Cris Formage Level 1", "Cris Formage Level 2", "Cris Formage Level 3"],
        default: "None",
    },
    donation: {
        type: Number,
        default: 0,
    },
});

const User = mongoose.model("User", userSchema);
export default User;