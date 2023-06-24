import React from "react";
import bmi from "../images/BodyWt.gif";


export default function BMI() {
  const [number1, setNumber1] = React.useState(0);
  const [dialog, setDialog] = React.useState('');
  const [total, setTotal] = React.useState();

  function calculateTotal() {
    setTotal( Math.floor(70 +  (( number1 - 152)/ 2.54)*2.7) );

      if( total < 20 )
      {
            setDialog(" The entry is invalid !! ") ;
      } 
     
  }

  return (
    <div className="BMI">
      <div className="BmiMain">
        <img src={bmi} alt="" />
        <div className="bmicalci">
          <h3> BMI Calculator <h6>( for adults )</h6> </h3>
        

          <input
            placeholder=" Enter height(in cm)"
            aria-required
            type="number"
            value={number1}
            onChange={(e) => setNumber1(+e.target.value)}
          />
        
          <button onClick={calculateTotal}> Calculate </button>
        </div>
      </div>
      <div className="statement" >
        {total && (
          <div className="result">
            {" "}
            Your Ideal weight is
            <div className="weight">{total}    Kg </div>
                <p>{dialog} </p> 
          </div>
        )}
    
      </div>
    </div>
  );
};




