import Event from "../models/events.models.js";

export const createEvent = async (req, res) => {
    const event = new Event({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        location: req.body.location,
        createdBy: req.body.createdBy,
        attendees: req.body.attendees,
        capacity: req.body.capacity,
        membershipRequired: req.body.membershipRequired
    });
    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const registerForEvent = async (req, res) => {
    try {
        const event = await Event.findOne({ title: req.body.title });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        if (event.attendees.includes(req.body.userId)) {
            return res.status(400).json({ message: 'User already registered for this event' });
        }
        if (event.capacity <= event.attendees.length) {
            return res.status(400).json({ message: 'Event is full' });
        }
        event.attendees.push(req.body.userId);
        await event.save();
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};