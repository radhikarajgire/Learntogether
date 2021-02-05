
const express = require('express');
const {generateSlot,
        getFreeSlots, 
        getEvents,
        createEvent,
        deleteSlots
      } = require('../controllers/timeSlotController');
const { body, validationResult } = require('express-validator');
const router = express.Router();

router.post('/newSlot', body("day").isLength({min: 5}), generateSlot);
router.get('/freeSlots', getFreeSlots);
router.get('/events', getEvents);
router.post('/createEvent', createEvent);
//router.delete('/deleteSlot/:id', deleteSlots);


module.exports = {
    routes: router
}