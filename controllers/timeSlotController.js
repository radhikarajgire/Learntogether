'use strict';


const firebase = require('../db');
const freeTimes = require('../models/timeSlot');
const eventsBooked = require('../models/events'); 
const firestore = firebase.firestore();



const generateSlot = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data.day)
        await firestore.collection('days').doc(data.day).set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getFreeSlots = async (req, res, next) => {
    try {
        const freeSlots = firestore.collection('days');
        const data = await freeSlots.get();
        const freeSlotsArray = [];
        if(data.empty) {
            res.status(404).send('No free slots found');
        }else {
            data.forEach(doc => {
                const singleDay = new freeTimes(
                    doc.id,
                    doc.data().day,
                    doc.data().start,
                    doc.data().stop,
                    doc.data().duration,
                    doc.data().timezone,
                );
                freeSlotsArray.push(singleDay);
            }),
            res.send(freeSlotsArray);
       }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEvents = async (req, res, next) => {
    try {
        //const id = req.params.id;
        const happen = await firestore.collection('events');
        const data = await happen.get();
        if(!data.exists) {
            res.status(404).send('No events you are free');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const createEvent = async (req, res, next) => {
    try {
        //const id = req.params.id;
        const data = req.body;
        const newevent =  await firestore.collection('events').doc(data.day);
        await newevent.update(data);
        res.send('New event record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteSlots = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('days').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    generateSlot,
    getFreeSlots,
    getEvents,
    createEvent,
    deleteSlots
}