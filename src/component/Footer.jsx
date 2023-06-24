import React from 'react'
import facebook  from '../images/facebook.png';
import github  from '../images/github.png';
import whatsapp  from '../images/whatsapp.png';
import instagram  from '../images/instagram.png';
export function Footer(){
     return ( 
        <div className="Footer">
            <h4> Contact US</h4>
            <div className="ContactLogo">
                <img src={facebook} alt="" />
                <img src={github} alt="" />
                <img src={instagram} alt="" />
                <img src={whatsapp} alt="" />
            </div>
            <div className="footerpara">
                <p> Freepik Company
Copyright © 2010-2023 Freepik Company S.L. All rights reserved</p>
            </div>
        </div>
     )
}