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
        value:"Europe/London",
        label:"(GMT+00:00) London"
      },
      {
        value:"Asia/Kuala_Lumpur",
        label:"(GMT+08:00) Kuala Lumpur, Singapore"
      },
      {
        value: "(GMT+01:00) Central European Time - Belgrade",
        label:"Europe/Belgrade"
      },
      {value: "(GMT+01:00) Central European Time - Prague",
      label:"Europe/Prague"
      },
      {
        value: "(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy",
        label: "Asia/Kamchatka"
      },
      {
        value:"(GMT+10:30) Central Time - Adelaide",
        label: "Australia/Adelaide"
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