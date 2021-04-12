const express = require('express');
const router = express.Router();

const Event = require('../models/Event');

// GET /api/event/events
// Find all events
router.get('/events', async (req, res) => {
    try{
        const events = await Event.find();

        return res.status(200).json({
            data: events,
            count: events.length
        });
    } catch(err){
        console.error(err);
    }
});

// POST /api/event/create-event
// Create a new event
router.post('/create-event', async (req, res) => {
    try{
        const newEvent = {
            name: req.body.name,
            location: req.body.location,
            date: req.body.date,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description,
            poster: req.body.poster,
        };

        const dataEvent = await Event.create(newEvent);

        return res.status(201).json({ data: dataEvent });
    } catch(err){
        console.error(err);
    }
});

// GET /api/event/detail/:eventId
// Find more detail about an event
router.get('/detail/:eventId', async (req, res) => {
    try{
        const eventId = req.params.eventId;
        const event = await Event.findById(eventId);

        return res.status(200).json({
            data: event
        });
    } catch(err){
        console.error(err);
    }
});

module.exports = router; 