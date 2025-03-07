const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/events/:id?', eventController.getEvents);
router.post('/events', eventController.createEvent);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);

module.exports = router;