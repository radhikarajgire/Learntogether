import React from "react";


function Form(){


return(
      <form>
             <div class="row g-3">
      <div class="col">
      <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
      </div>
      <div class="col">
      <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
    </div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
 
  <button type="submit" class="btn btn-primary">Book Appointment</button>
</form>
      
    );
}
export default Form;