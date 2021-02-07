import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

function Scheduler() {
    // const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null)
    const data = [
      {
        value:"Asia/Bangkok",
        label:"(GMT+07:00) Bangkok, Hanoi, Jakarta"
      },
      {
        value:"America/Los_Angeles",
        label:"(GMT-08:00) Pacific Time (US & Canada)"
      },
      {
        value:"Europe/Amsterdam",
        label:"(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
      },
      {
        value:"Asia/Calcutta",
        label:"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi"
      },
      {
        value:"Africa/Nairobi",
        label:"Africa/Nairobi"
      },
      {
        value:"Asia/Kuala_Lumpur",
        label:"(GMT+08:00) Kuala Lumpur, Singapore"
      }
    ]
    return (
      <div className = 'App'>
        <h2>Pick a Date and Time</h2>
        <DatePicker 
        selected={selectedDate} 
        // selected={startDate}
        // onChange={date => setStartDate(date)
        onChange={date => setSelectedDate(date)} 
        inline
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        minDate = {new Date()}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
  
        />
        <Select
        options={data} />
      </div>
    );
  }
  export default Scheduler;