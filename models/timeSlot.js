class TimeSlot {
    constructor(id, day, start, stop, duration, timezone){
             this.id = id;
             this.day = day;
             this.start = start;
             this.stop = stop;
             this.duration = duration;
             this.timezone = timezone;
         }
}
module.exports = TimeSlot;