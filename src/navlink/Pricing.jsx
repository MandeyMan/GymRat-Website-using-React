import React from 'react'
import {
   MDBCard,
   MDBCardBody,
   MDBCardText,
   MDBCardImage
 } from 'mdb-react-ui-kit';
//  import bronze from '../images/bronze.gif';
import bronze from '../images/newBronze.gif';
import gold from '../images/newGold.gif';
import silver from '../images/newSilver.gif';

 

export default function Pricing(){
     return(
      <div className="Pricing">
<MDBCard className='Card'>
<MDBCardImage className='CardImg' src={gold} alt='...' position='top' />

<h3> Gold Membership</h3>
<h4> Rs 5000 /- per month </h4>
   <p>  24x7 Mentor Guidance || Free Swimming Pool ||   Free Health check up || Free Steam Bath  || Any time Gym</p>

 <button className='PricingBtn'>Activate</button>
    </MDBCard>

    <MDBCard className='Card'>
<MDBCardImage className='CardImg' src={silver} alt='...' position='top' />

<h3> Gold Membership</h3>
<h4> Rs 5000 /- per month </h4>
   <p>  24x7 Mentor Guidance || Free Swimming Pool || Free Health check up || Free Steam Bath </p>

   <button className='PricingBtn'>Activate</button>
    </MDBCard>

    <MDBCard className='Card'>
<MDBCardImage className='CardImg' src={bronze} alt='...' position='top' />
<h3> Gold Membership</h3>
<h4> Rs 5000 /- per month </h4>
   <p>  24x7 Mentor Guidance|| Free Steam Bath    </p>
 
   <button className='PricingBtn'>Activate</button>
    </MDBCard>

    
      </div>
     )
}