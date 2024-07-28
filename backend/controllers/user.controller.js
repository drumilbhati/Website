import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET ;

export const findUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username,
                role: user.role,
            },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login successful',
            username: user.username,
            role: user.role,
            balance: user.balance,
            donation: user.donation,
            token,
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const authenticateUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decodedToken = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decodedToken.userId).select('-password');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        res.status(200).json(user);
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.status(500).json({ message: 'Server error' });
    }
};

export const findAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username,
                role: user.role,
            },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Admin login successful',
            username: user.username,
            role: user.role,
            token,
        });
    } catch (error) {
        console.error('Admin login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        user = new User({
            username,
            password: hashedPassword,
            role: 'user',
            balance: 1000000,
            donation: 0
        });
        
        await user.save();
        
        res.status(201).json({ message: 'User created successfully', username: user.username });
    } catch (error) {
        console.error('User creation error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const donate = async(req, res) => {
    try {
        const { token, amount } = req.body;

        const decodedToken = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decodedToken.userId).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.role !== 'user') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        if (!amount || amount <= 0 || isNaN(amount)) {
            return res.status(400).json({ message: 'Invalid amount' });
        }
        
        if (amount > user.balance) {
            return res.status(400).json({ message: 'Insufficient balance' });
        }
        
        user.balance -= amount;
        user.donation += amount;
        await user.save();
        
        res.status(200).json({
            username: user.username,
            balance: user.balance,
            donation: user.donation
        });
        
    } catch (error) {
        console.error('Donation error:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const findProfile = async (req, res) => {
    try {
        const token = req.body.token;
        const decodedToken = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decodedToken.userId).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            username: user.username,
            balance: user.balance,
            donation: user.donation,
        });
    } catch (error) {
        console.error('User profile error:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
export const subscribe = async (req, res) => {
    try {
        const { token, tier } = req.body;
        const decodedToken = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decodedToken.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.role !== 'user') {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        if (!tier) {
            return res.status(400).json({ message: 'Invalid tier' });
        }

        // Define tier prices
        const tierPrices = {
            'Cris Formage Level 1': 9.99,
            'Cris Formage Level 2': 19.99,
            'Cris Formage Level 3': 29.99
        };

        const price = tierPrices[tier];
        if (!price) {
            return res.status(400).json({ message: 'Invalid tier' });
        }

        if (user.balance < price) {
            return res.status(400).json({ message: 'Insufficient balance' });
        }

        // Update user's balance and membership
        user.balance -= price;
        user.membership = tier;
        
        // Save the updated user document
        await user.save();

        res.status(200).json({ 
            message: 'Subscription successful',
            newBalance: user.balance,
            membership: user.membership
        });
    } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};