import React from 'react'
// import bronze from '.'
import myPic from '../images/myPic.jpg';
export default function AboutUs(){
    return (
         <div className="AboutUs">
              <div className="AboutIntro">
                  <h2> Introduction </h2>
                  <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus iusto nisi quam vero temporibus inventore distinctio laudantium illum cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi iste voluptas praesentium necessitatibus rem blanditiis autem illum excepturi odit amet.</h6>
              </div>
              <div className="AboutAim">
                 <h2> Our Aim </h2>
                 <ul>
                    <li> &#127919;	 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolor</li>
                    
                    <li> &#127919;	 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolor</li>
                    
                    <li> &#127919;	 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolor</li>
                    
                    <li> &#127919;	 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolor</li>
                    
                    <li> &#127919;	 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolor</li>
                    
                 </ul>
    
              </div>
              <div className="developerSection">
                <img src={myPic} placeholder='developer' />
                <div className="myWords">
                      <h4> Hello everyone, I'm Prakash  </h4>
                      <p>Lorem ipsum dolor sit, cusandae, totam repellat unde officia harum omnis?</p>
                      <p>Lorem  officia harum omnis?</p>
                      <p>Lorem ipsum dolor sit, cusandae, totam repellat unde officia harum omnis?</p>
                      <p>Lorem ipsum dolor sit, lat unde officia harum omnis?</p>
                </div>
              </div>
         </div>
    )
}