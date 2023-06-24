import React from "react";
import bmi from "../images/bmi.gif";

let statement = "";

export default function BMI() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [total, setTotal] = React.useState();

  function calculateTotal() {
    setTotal(number2 *10000 / (number1 * number1));
    if (total < 18.5) {
      statement =
        " Your BMI falls in under weight catogary . You need more focus in your health ";
    
    } else if (total > 25) {
      statement =
        " Your BMI falls in Overweight Catogary . You need more focus on your health ";
    
    } else  {
      statement = " Congrats !!! your BMI falls in fit range   ";
     
    }
    total = Math.ceil(total);
  }

  return (
    <div className="BMI">
      <div className="BmiMain">
        <img src={bmi} alt="" />
        <div className="bmicalci">
          <h3> BMI Calculator </h3>

          <input
            placeholder=" Enter height(in mtr)"
            aria-required
            type="number"
            value={number1}
            onChange={(e) => setNumber1(+e.target.value)}
          />
          <input
            placeholder=" Enter weight (in Kg) "
            aria-required
            type="number"
            value={number2}
            onChange={(e) => setNumber2(+e.target.value)}
          />
          <button onClick={calculateTotal}> Calculate </button>
        </div>
      </div>
      <div className="statement" >
        {total && (
          <div className="result">
            {" "}
            Your BMI
            <progress
              id="file"
              value={total}
              max="25"
           
            />
            {" "}
            {total}{" "}
          </div>
        )}
        <p> {statement} </p>
      </div>
    </div>
  );
}

// 18.5 kg/m2 - 25 kg/m2
