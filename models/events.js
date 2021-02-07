class Event {
    constructor(id, day, starttime, who, why){
             this.id = id;
             this.day = day;
             this.starttime = starttime;
             this.who = who;
             this.why = why;
         }
}
// const appointment = new Event({
//     id: ObjectId,
//     startDate: "10-02-2021",
//     endDate: "10.03-2021",
//     slotsAvailable:{startTime: "09:50:00", endTime: "09:50:00" },
//     Duration: "00:30:00"
//   });

module.exports = Event;

