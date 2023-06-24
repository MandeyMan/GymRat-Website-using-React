import React from "react";

function Form(){ 
    return(
         <div className="Form">
             <h1> Form </h1>
             <input type="text" placeholder="Enter name" required/>
             <input type="text" placeholder="age" required/>
             <input type="text" placeholder="Sex" required/>
             <input type="number" placeholder="Phone NO" required/>
             <button type="Submit" className="Submit"> Submit </button>
         </div>
    )
}

export default Form;