// import React, { useState } from 'react'
// // import './App.css'
// // function Practice (){
// //     let [name, setName]=useState("sam");
// //    ;
// //     function addChange(){
// //         // setName("peter")
// //         if(name==="sam"){
// //             setName("peter")
// //         }else{
// //             setName("sam")
// //         }
// //     }
// //     function clearArray(){
// //         setName("")
// //     }
// //     const mystyle={
// //         color:"red",
// //         marginbottom:"25px",
// //         fontSize:"20px"
    
// //     }
// //   return (
// //     <div className='App' style={mystyle}>
// //        <h1 >Hi i am  {name}</h1>
      
// //        <button  onClick={addChange}>Change name</button>
// //        <button  onClick={clearArray}>Delete</button>
      

// //     </div>
// //   )
// // }

// // export default Practice

// import React, { useState } from 'react';

// function AddNumbers() {
//   // Define state variables for the numbers and the sum
//   const [num1, setNum1] = useState();
//   const [num2, setNum2] = useState(0);
//   const [sum, setSum] = useState(0);

//   // Function to handle addition
//   const handleAddition = () => {
//     // Calculate the sum
//     const result = num1 + num2;
   
//     // Update the sum state
//     setSum(result);
    
//   };
//   const handleLess =()=>{
//     let res =num1 - num2;
//     setSum(res)
//   }

//   return (
//     <div >
//       <h2>Addition of Two Numbers</h2>
//       <input
//       style={{margin:"20px"}}
//         type="number"
//         value={num1}
//         onChange={(e) => setNum1(parseInt(e.target.value))}
//       />
//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setNum2(parseInt(e.target.value))}
//       />
//       <button onClick={handleAddition}>Add</button>
//       <button onClick={handleLess}>less</button>
//      {
//        (num1)  ?  <p style={{color:"red",fontSize:"50px"}}>Sum: {sum}</p>
//          :
//          ''
//      }
//      {
//         (num2) ?  <p style={{color:"teal",fontSize:"50px"}}>Sum: {sum}</p>
//         :
//         ''
//      }
//     </div>
//   );
// }

// export default AddNumbers;



// import React, { useState } from 'react';
// // import {NotificationContainer, NotificationManager} from 'react-notifications';

// function Practice() {
//   let [status, setStatus] = useState(false); // Initial value set to false
// //   let shownotification=()=>{
// //     NotificationManager.info("welcome")
// //   }
//   return (
//     <div className='app'>
//         <button   onClick={() => setStatus(!status)}>show</button>
//         {
//             (status)
//             ? <p className='para'>welcome to homepage</p>
//             : ' '
//         }
//     </div>
//   )
// }

// export default Practice;











