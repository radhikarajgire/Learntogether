class event {
    constructor(id, appointment, duration){
             this.id = id;
             this.appointment = appointment;
             this.duration = duration;
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

