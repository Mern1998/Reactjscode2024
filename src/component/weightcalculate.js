// import React from "react";
import React, { useState } from "react";
import "../component/Bmi.css";

function Weightcalculate() {
    const [weight, setWeight] = useState (0)
    const [height, setHeight] = useState (0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')
  
    let calcBtn = (event) => {
        //prevent submitting to the server
        event.preventDefault()
     
        if (weight === 0 || height === 0) {
          alert('Please enter a valid weight and height')
        
        } else {
          let bmi = (weight / (height * height) * 703)
          setBmi(bmi.toFixed(1))
     
          // Logic for message
     
          if (bmi < 25) {
            setMessage('You are underweight')
            document.getElementsByClassName('p1').style.color='red'

          } else if (bmi >= 25 && bmi < 30) {
            setMessage('You are a healthy weight')
          

          } else {
            setMessage('You are overweight')


          }
        }
      }

//   let relode=()=>{
//     window.location.reload()
//   }


  return (
    <>
      <div className="app">
        <div className="container">
          <h2 className="center">BMI Calculator</h2>
          <form onSubmit={calcBtn}>
            <div>
              <label>Weight (lbs)</label>
              <input
                placeholder="Enter weight value"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div>
              <label>Height (in)</label>
              <input
                placeholder="Enter height value"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div>
              <button className="btn" type="submit">
                Submit
               
              </button>
            
             
              {/* <button
                className="btn btn-outline"
                onClick={relode}
                type="submit"
              >
                Reload
              </button> */}
            </div>
           
          </form>

          <div className="center">
            <h3>Your BMI is:{bmi} </h3>
            <p className="p1">{message}</p>
          </div>
        
        </div>
       
      </div>
    </>
  );
}

export default Weightcalculate;
