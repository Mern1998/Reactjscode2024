import React, { useEffect, useState } from "react";
import "../component/Hotal.css";
import { Form } from "react-bootstrap-v5";

const Hotalproject = () => {
  const [meal, setMeal] = useState([]);
  const [area, setArea] = useState("indian");
  const[serch, setSerch]=useState('')

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const dta = await api.json();
      console.log(dta.meals);
      setMeal(dta.meals);
    };
    fetchData();
  }, [area]);

  // search chines food code

const submitHandler= async (e) =>{
  e.preventDefault();
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${serch}`
  );
  const data = await api.json();
  console.log(data.meals);
   setMeal(data.meals);
  setSerch("")
};



  return (
    <>
      <div
        className="container"
        style={{
          margin: "auto",
          justifyContent: "center",
          textAlign: "center",
          gap: "15px",
        }}
      >
        <button
          type="button"
          className="btn1"
          onClick={() => setArea("Indian")}
        >
          Indian
        </button>
        <button
          type="button"
          className="btn1"
          onClick={() => setArea("Canadian")}
        >
          Canadian
        </button>
        <button
          type="button"
          className="btn1"
          onClick={() => setArea("american")}
        >
          American
        </button>
        <button type="button" className="btn1" onClick={() => setArea("thai")}>
          Thai
        </button>
        <button
          type="button"
          className="btn1"
          onClick={() => setArea("british")}
        >
          British
        </button>
        <button
          type="button"
          className="btn1"
          onClick={() => setArea("russian")}
        >
          Russian
        </button>
      </div>

      {/* // search chines food code */}

      <Form className="search">
        <input onChange={(e)=>setSerch(e.target.value)} type="search"/>
        <button onClick={submitHandler} type="button">Search</button>
      </Form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {meal.map((data) => (
          <div key={data.idMeal} style={{ textAlign: "center" }}>
            <div>
              <img src={data.strMealThumb} alt="" className="img" />
            </div>
            <h5>{data.strMeal}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hotalproject;
