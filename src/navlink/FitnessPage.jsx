import React, { useState } from 'react'

import BodyWt from './BodyWt';
import BMI from './BMI';

export default function FitnessPage()
{ 
     const [showdiv1,setShow1] = useState(true);
     const [showdiv2,setShow2] = useState(false);


 function setDiv1(){
     setShow1(true);
     setShow2(false);

 }
 function setDiv2(){
     setShow1(false);
     setShow2(true);

 }


    return (
        <div className="FitnessPage">
     
           <div className="fitnessHeader">
      <button onClick={setDiv1}>BMI Calci</button>
     <button onClick={setDiv2}>Body Weight</button>
  
         
         </div>

        {showdiv1 && <> <BMI/></>}
        {showdiv2 && <> <BodyWt /></>}
      
        </div>
    )
}