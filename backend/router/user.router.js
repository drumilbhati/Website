import express from 'express';
import { findUser, createUser, authenticateUser, findAdmin, donate, findProfile, subscribe } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/api/login', findUser);
router.get('/api/auth-endpoint', authenticateUser);

router.post('/api/admin-login', findAdmin);

router.post('/api/register', createUser);

router.post('/api/donate', donate);

router.get('/api/demo', (req, res)=> {
    res.send("Hi");
})

router.post('/api/profile', findProfile);

router.post('/api/subscribe', subscribe);

// export const subscribe = async (req, res) => {
//     try {
//         const { token, tier } = req.body;
//         const decodedToken = jwt.verify(token, JWT_SECRET);
//         const user = await User.findById(decodedToken.userId);

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         if (user.role !== 'user') {
//             return res.status(403).json({ message: 'Unauthorized' });
//         }
//         if (!tier) {
//             return res.status(400).json({ message: 'Invalid tier' });
//         }

//         // Define tier prices
//         const tierPrices = {
//             'Cris Formage Level 1': 9.99,
//             'Cris Formage Level 2': 19.99,
//             'Cris Formage Level 3': 29.99
//         };

//         const price = tierPrices[tier];
//         if (!price) {
//             return res.status(400).json({ message: 'Invalid tier' });
//         }

//         if (user.balance < price) {
//             return res.status(400).json({ message: 'Insufficient balance' });
//         }

//         // Update user's balance and membership
//         user.balance -= price;
//         user.membership = tier;
        
//         // Save the updated user document
//         await user.save();

//         res.status(200).json({ 
//             message: 'Subscription successful',
//             newBalance: user.balance,
//             membership: user.membership
//         });
//     } catch (error) {
//         console.error('Subscription error:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };
export default router;

