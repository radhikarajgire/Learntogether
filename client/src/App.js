import React,{useState, useEffect} from "react";
import Scheduler from "./Components/scheduler.js"
import Form from "./Components/form.js"



function App() {
//  const [state, setState] = useState([])
//  useEffect(()=> {
//  fetch('/api/freeSlots/:date%:timezone')
//  .then(res => {
//    if(res.ok){
//      return res.json()
//      }
//     })
//  .then(jsonResponse => setState({freeSlots}))
//  })
  return (
    <div className = 'App'>
     <Scheduler />
     {/* <Form/>  */}
    </div>
  );
}
export default App;