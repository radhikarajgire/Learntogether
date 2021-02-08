'use strict';


const firebase = require('../db');
const freeTimes = require('../models/timeSlot');
const eventsBooked = require('../models/events'); 
const firestore = firebase.firestore();
const { body, validationResult } = require('express-validator');

const generateSlot = async (req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    try {
        const data = req.body;
        await firestore.collection('days').doc().set(data);
        res.send('Record saved successfuly');
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getFreeSlots = async (req, res, next) => {
    try {
        const id = req.params;
        const UTCtimeearliest = new Date(id.date+" 00:00:00 GMT"+id.timezone).toISOString()
        const UTCtimelatest = new Date(id.date+" 23:59:59 GMT"+id.timezone).toISOString()
        const freeSlots = firestore.collection('days');
        const data = await freeSlots.get();
        const freeSlotsArray = [];
        data.forEach((entry)=>{          
            if(UTCtimeearliest<entry.data().starttime&&entry.data().stoptime<UTCtimelatest){
                for(let i=Date.parse(entry.data().starttime);i<Date.parse(entry.data().stoptime);i+=entry.data().duration*60000){
                    let shift = Number((id.timezone).slice(0, 3))*3600000//+Number((id.timezone).slice(3, 5))*60000
                    let stringTime=new Date(i+shift).toISOString().replace('T', ' ').split('.')
                    freeSlotsArray.push(stringTime[0]);  
            }}
            else if(UTCtimeearliest<entry.data().stoptime&&entry.data().stoptime<UTCtimelatest&&entry.data().starttime<UTCtimeearliest){
                for(let i=Date.parse(UTCtimeearliest);i<Date.parse(entry.data().stoptime);i+=entry.data().duration*60000){
                    let shift = Number((id.timezone).slice(0, 3))*3600000
                    let stringTime=new Date(i+shift).toISOString().replace('T', ' ').split('.')
                    freeSlotsArray.push(stringTime[0]);
            }}
            else if(UTCtimeearliest<entry.data().starttime&&entry.data().starttime<UTCtimelatest&&entry.data().stoptime>UTCtimelatest) {
                for(let i=Date.parse(entry.data().starttime);i<Date.parse(UTCtimelatest);i+=entry.data().duration*60000){
                    let shift = Number((id.timezone).slice(0, 3))*3600000
                    let stringTime=new Date(i+shift).toISOString().replace('T', ' ').split('.')
                    freeSlotsArray.push(stringTime[0]);
            }}
            });
            if(freeSlotsArray.length===0){
                res.send(['Nothing matches your request'])
            }
            else{
                res.send(freeSlotsArray);
            }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEvents = async (req, res, next) => {
    try {
        const id = req.params;
        const UTCtimeearliest = new Date(id.startdate+" 00:00:00 GMT+0000").toISOString()
        const UTCtimelatest = new Date(id.enddate+" 23:59:59 GMT+0000").toISOString()
        const happen = await firestore.collection('events');
        const data = await happen.get();
        const eventsArray = [];
        data.forEach(entry => {
            if(UTCtimeearliest<entry.data().eventtime&&entry.data().eventtime<UTCtimelatest){
            let timeform = entry.data().eventtime.split(".")   
            let pushme = {'eventtime': timeform[0].replace("T"," "), 'duration': entry.data().duration}
               eventsArray.push(pushme) 
            }});
        if(eventsArray.length===0){
            res.send(['Nothing matches your request'])
        }
        else{
            res.send(eventsArray);
        }      
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const createEvent = async (req, res, next) => {
    try {
        //const data = req.body;
        const id = req.params;
        const correctformdate=id.dateTime.replace(/&/gi, ' ')
        const UTCtime=new Date(correctformdate).toISOString() 
        console.log(UTCtime)
        let newevent = firestore.collection('events');
        let doc =  await newevent.get()
        let prebook = false
        doc.forEach((event)=>{
            if(event.data().eventtime.toUpperCase()===UTCtime.toUpperCase()){
                prebook = true      
            }})
        
        if(prebook){
            res.status(422).send(['This slot is already booked'])
        }else {
            let tosave = {'eventtime':UTCtime, 'duration': id.duration}
            newevent.add(tosave)
            res.status(200).send(['New event record updated successfuly'])
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
