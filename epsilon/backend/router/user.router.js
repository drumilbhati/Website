import express from 'express';
import { findUser, createUser } from '../controllers/user.controller.js';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

router.get('/api/findUser', findUser);

router.post('/api/createUser', createUser);

export default router;