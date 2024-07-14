import User from "../models/user.models.js";
import bcrypt from "bcrypt";

export const createUser = async(req, res) => {
    try{
        const { username, password, balance } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, balance });
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}
