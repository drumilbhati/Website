import express from "express";
import { createEvent, getEvents, registerForEvent } from "../controllers/events.controller.js";

const router = express.Router();

router.post('/api/post-event', createEvent);

router.get('/api/get-events', getEvents);

router.post('/api/register-for-event', registerForEvent);

export default router;