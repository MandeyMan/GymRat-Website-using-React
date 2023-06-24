import React,{useState} from 'react'
import Form from './Form';
import Introdunction from './Introduction';
import running from '../images/running.gif';
function Intro() 
{ 
    const[show,setShow] = useState(true);

    return <>
         
         <div className="Intro">
            <img src={running} />
   { show && <div className="div1"><Introdunction/> <button className='Btn' type='button' onClick={()=>setShow(!show)}>{ show ? "Register": "Not Now"} </button> </div>} 

   { !show && <div className="div2"><Form/>  <button className='Btn' type='button' onClick={()=>setShow(!show)}>{ show ? "Register": "Not Now"}</button> </div>} 
   
        
         </div>
    </>
}
export default Intro;