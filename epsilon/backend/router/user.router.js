import express from 'express';
import { findUser, createUser, authenticateUser } from '../controllers/user.controller.js';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

router.get('/api/login', findUser);
router.get('/api/auth-endpoint', authenticateUser, (req, res) => {
  res.json({message: "You are now authenticated"});
}); 

router.post('/api/register', createUser);

export default router;