import React from 'react'

import gif3 from '../images/newGif3.jpg';
import gif2 from '../images/newGif2.jpg';
import gif1 from '../images/newGif1.jpg';

export default function Carasoul(){
     return (
        <div className="Carasoul">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-50" src={gif1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-50" src={gif2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-50" src={gif3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
     )
}