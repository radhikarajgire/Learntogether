import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

function Scheduler() {
    // const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState()
    const [selectedArea, setSelectedArea] = useState({"label": "(GMT+00:00)"})

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

    useEffect(()=>{
      if(selectedDate){
      let testzone = selectedArea.label.slice(4, 10).replace(':', '')
      let testyear = selectedDate.getFullYear()
      let testmonth = selectedDate.getMonth()<9?'0'+(selectedDate.getMonth()+1):selectedDate.getMonth()+1
      let testday = selectedDate.getDate()<10?'0'+(selectedDate.getDate()):selectedDate.getDate()
      let testdate = testyear+"-"+testmonth+'-'+testday
      fetch("http://localhost:8000/api/freeSlots/"+testdate+"%"+testzone)
      .then(response=>response.json())
      .then(data=>console.log(data))
      .catch((error) => {
      console.error('Error:', error)})
      }

    }, [selectedDate, selectedArea])

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
        //filterTime={filterPassedTime}
  
        />
        <Select
        options={data} 
        onChange={info=>setSelectedArea(info)}/>
      </div>
    );
  }
  export default Scheduler;