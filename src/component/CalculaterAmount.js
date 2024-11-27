import React, { useState } from "react";
import "../component/login.css";
function CalculaterFun() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [message, setMessage] = useState(0);

  let addFun = (e) => {
    e.preventDefault();
    if (num1 === 0 || num2 === 0 || num3 === 0) {
      alert("please value define");
    } else {
      let message = (parseInt(num1) * parseInt(num2) * parseInt(num3)) / 100;
      setMessage(parseInt(message));
    }
  };
  let handleBtn = (e) => {
    setMessage(0);
    window.location.reload();
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="heading_text">
            <h1 className="heading_one">Simple Calculator</h1>
            <p className="heading_two">Calculate your simple interest Easily</p>
          </div>
          <div className="total_amount_card">
            <div className="card_text ">
              <h3>₹ {message}</h3>
              <p className="total_amount_para">Total simple interest</p>
            </div>
          </div>
          <form onSubmit={addFun} style={{ textAlign: "center" }}>
            <div className="input_area" style={{ padding: "20px" }}>
              <div className="input_field">
                <input
                  type="number"
                  id="outlined-basic"
                  label="₹ Principal amount"
                  variant="outlined"
                  value={num1 || ""}
                  onChange={(e) => setNum1(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input_field">
                <input
                  type="number"
                  id="outlined-basic"
                  label="Rate of interest (p.a) %"
                  variant="outlined"
                  value={num2 || ""}
                  onChange={(e) => setNum2(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input_field">
                <input
                  type="number"
                  id="outlined-basic"
                  label="Time period ( Yr )"
                  variant="outlined"
                  value={num3 || ""}
                  onChange={(e) => setNum3(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="button_collection">
              {/* <Stack spacing={2} direction="row">     */}
              <button className="btn_one">calculate</button>
              <button className="btn_one" onClick={handleBtn}>
                Reset
              </button>

              {/* </Stack> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CalculaterFun;
