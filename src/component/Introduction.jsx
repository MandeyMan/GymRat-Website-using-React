import React from "react";
import arms from '../images/arms.gif';

function Introdunction(){
     return(
         <div className="Introduction">
           <h2> Hii , Welcome to india's most working Gym</h2>
 <div className="heading"><img src={arms}  /><h1>Gym Rat Fitness</h1> <img src={arms} className="arm2"/></div> 
        <p> If you are interested in the Gym then click on button to register</p>
   
         </div>
     )
}
export default Introdunction;