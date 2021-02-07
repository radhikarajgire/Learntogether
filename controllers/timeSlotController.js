'use strict';


const firebase = require('../db');
const freeTimes = require('../models/timeSlot');
const eventsBooked = require('../models/events'); 
const firestore = firebase.firestore();
const { body, validationResult } = require('express-validator');
var moment = require('moment-timezone');



const generateSlot = async (req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    try {
        const data = req.body;
        const datestamp = new Date(data.day).toISOString()
        data.day = datestamp.slice(0, 10)
        console.log(data.day)
        await firestore.collection('days').doc(data.day).set(data);
        res.send('Record saved successfuly');
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getFreeSlots = async (req, res, next) => {
    try {
        const id = req.params;
        const freeSlots = firestore.collection('days').doc(id.date);
        const data = await freeSlots.get();
        const zone = id.timezone.replace("-","/")
        const freeSlotsArray = [];
        if(!data.exists) {
            res.status(404).send('No slots exist for this date');
        }else {
            for(let i=Date.parse(id.date+'T'+data.data().start);i<Date.parse(id.date+'T'+data.data().stop);i+=data.data().duration*60000){
                let stringTime=new Date(i)
                let localTime = stringTime.toLocaleString('de-DE', {timeZone: zone})
                freeSlotsArray.push(localTime);
            };
            res.send(freeSlotsArray);
       }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEvents = async (req, res, next) => {
    try {
        const id = req.params;
        console.log(id)
        const happen = await firestore.collection('events');
        const data = await happen.get();
        const eventsArray = [];
        if(data.empty) {
            res.status(404).send('No events, you are free :)');
        }else {
            data.forEach(doc => {
                const singleEvent = new eventsBooked(
                doc.id,
                doc.data().day,
                doc.data().starttime,
                doc.data().who,
                doc.data().why
            );
            eventsArray.push(singleEvent);
        }),
            res.send(eventsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const createEvent = async (req, res, next) => {
    try {
        const data = req.body;
        const id = req.params;
        console.log(id)
        let newevent = firestore.collection('events').doc(data.day);
        let doc =  await newevent.get()
        let testday = new Date(data.day).toISOString().slice(0, 10)
        let timeslot = firestore.collection('days').doc(testday)
        let testslot = await timeslot.get()
        if (testslot.exists){
            if (!doc.exists) {
                const isValidTimeSlot = [Date.parse(testday+'T'+testslot.data().start), Date.parse(testday+'T'+testslot.data().stop)].includes(Date.parse(testday+'T'+data.starttime))
                if (!isValidTimeSlot){res.send('Outside of bookable time for this day')}
                else {newevent.set(data);
                    res.status(200).send('New event record updated successfuly'); }  
            } else {
                res.status(422).send('It exists already');
            }}
        else{
            res.send('There are no slots on that day')
        }         
    } catch (error) {
      res.status(400).send(error.message);
    }
}

/*const deleteSlots = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('days').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}*/

module.exports = {
    generateSlot,
    getFreeSlots,
    getEvents,
    createEvent,
   //deleteSlots
}