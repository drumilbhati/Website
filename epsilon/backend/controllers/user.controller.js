import User from "../models/user.models.js";

export const findUser = async (req, res) => {
    try{
        const { username } = req.body;
        const user = await User.findOne({ username });
        if (user) {
            res.send(user);
        } else {
            res.status(404).send("Hello");
        }
    }
    catch(error){
        res.status(500).send(error);
    };
};

export const createUser = async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            password: req.body.password,
        });
    
        const savedUser = await user.save();
    
        res.send(savedUser);
    } catch (error) {
        res.status(500).send(error);
    }
};
