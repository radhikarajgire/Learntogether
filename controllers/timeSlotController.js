'use strict';


const firebase = require('../db');
const freeTimes = require('../models/timeSlot');
const eventsBooked = require('../models/events'); 
const firestore = firebase.firestore();



/*const generateSlot = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data.day)
        await firestore.collection('days').doc(data.day).set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}*/

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
        let newevent = firestore.collection('events').doc(data.day);
        let doc =  await newevent.get()
        if (!doc.exists) {
            console.log("123")
            newevent.set(data);
            res.status(200).send('New event record updated successfuly');   
        } else {
            res.status(422).send('It exists already');
        }
            
        
        //const id = req.params.id;
        
        //const newevent =  firestore.collection('events').doc(data.day);
        //await newevent.create(data);
             
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
    //generateSlot,
    getFreeSlots,
    getEvents,
    createEvent,
   //deleteSlots
}