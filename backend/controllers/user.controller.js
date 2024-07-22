    import User from "../models/user.models.js";
    import bcrypt from "bcrypt";
    import jwt, { decode } from "jsonwebtoken";

    export const findUser = async (req, res) => {
        User.findOne({ username: req.body.username })
        .then((user) => {
            
            bcrypt.compare(req.body.password, user.password)
            .then((match) => {

                if (!match) {
                    return res.status(400).json({ message: 'Incorrect password' });
                }

                const token = jwt.sign({
                    userId: user._id,
                    userName: user.username,
                    role: user.role,
                },
                'secret',
                { expiresIn: '1h' }
                );

                res.status(200).json({
                    message: 'Login successful',
                    username: user.username,
                    role: user.role,
                    token,
                })
            })
            .catch((error) => {
                res.status(400).json({ message: 'Incorrect password' });
            })
        })
        .catch((error) => {
            res.status(404).json({ message: 'User not found' });
        }) 
    }

    export const authenticateUser = async (req, res, next) => {
        try {
            const token = await req.headers.authorization.split(' ')[1];

            const decodedToken = await jwt.verify(token, 'secret');

            const user = await decodedToken;
            req.user = user;
            res.status(200).json({user: decodedToken});
            next();

        } catch (error) {
            res.status(401).json({error: new Error('Invalid request!')});
        }
    }

    export const findAdmin = async (req, res) => {
        User.findOne({ username: req.body.username })
        .then((user) => {
            
            bcrypt.compare(req.body.password, user.password)
            .then((match) => {

                if (!match) {
                    return res.status(400).json({ message: 'Incorrect password' });
                }

                if (user.role !== 'admin') {
                    return res.status(400).json({ message: 'Unauthorized' });
                }
                
                const token = jwt.sign({
                    userId: user._id,
                    userName: user.username,
                    role: user.role,
                },
                'secret',
                { expiresIn: '1h' }
                );

                res.status(200).json({
                    message: 'Login successful',
                    username: user.username,
                    role: user.role,
                    token,
                })
            })
            .catch((error) => {
                res.status(400).json({ message: 'Incorrect password' });
            })
        })
        .catch((error) => {
            res.status(404).json({ message: 'User not found' });
        }) 
    }

    export const createUser = async (req, res) => {
        try {
            const { username, password } = req.body;
            
            // Check if user already exists
            let user = await User.findOne({ username });
            if (user) {
            return res.status(400).json({ message: 'User already exists' });
            }
            
            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            // Create new user
            user = new User({
            username,
            password: hashedPassword
            });
            
            await user.save();
            
            res.status(201).json({ message: 'User created successfully', user });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    };
