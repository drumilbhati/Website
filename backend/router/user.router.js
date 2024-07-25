import express from 'express';
import { findUser, createUser, authenticateUser, findAdmin, donate, findProfile } from '../controllers/user.controller.js';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

router.post('/api/login', findUser);
router.get('/api/auth-endpoint', authenticateUser);

router.post('/api/admin-login', findAdmin);

router.post('/api/register', createUser);

router.post('/api/donate', donate);

router.get('/api/demo', (req, res)=> {
    res.send("Hi");
})

router.post('/api/profile', findProfile);

export default router;