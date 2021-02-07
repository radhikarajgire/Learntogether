
const express = require('express');
const {generateSlot,
        getFreeSlots, 
        getEvents,
        createEvent,
        deleteSlots
      } = require('../controllers/timeSlotController');
const { body, validationResult } = require('express-validator');
const router = express.Router();

router.post('/newSlot', generateSlot);
router.get('/freeSlots/:date%:timezone', getFreeSlots);
router.get('/events/:startdate%:enddate', getEvents);
router.post('/createEvent/:dateTime%:duration', createEvent);
//router.delete('/deleteSlot/:id', deleteSlots);


module.exports = {
    routes: router
}