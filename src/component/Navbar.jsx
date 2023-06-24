import React from 'react'
 import logo  from '../images/newLogo.png'
 import {Link} from 'react-router-dom';


export default function Navbar(){
     return (
        <div className="Navbar">
           <img src={logo} />
   


   <div className="navItems">
      
       <li ><Link to= '/'>Home  </Link></li>
      
       <li ><Link to= '/FitnessPage'> Calci. </Link></li>
       <li><Link to= '/Pricing'>Pricing </Link></li>
       <li ><Link to= '/AboutUs'> AboutUs </Link></li>
       
   </div> 
        </div>
     )
}