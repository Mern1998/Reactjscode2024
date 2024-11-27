// import React from "react";
// import "./App.css";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useState } from "react";


// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age ,setAge] =useState("");
//   const [data, setData] = useState([]);


//   // function addData() {
//   //   setData([...data, { name, email,age }]);
//   //   setName("");
//   //   setEmail("");
//   //   setAge("");
//   // }

//   function addData() {
//     if (name && email && age) {
//       setData([...data, { name, email, age }]);
//       setName("");
//       setEmail("");
//       setAge("");
//     } 
//   }
  
  
//   const removeData=(ind)=>{
//     let arr =data;
//     arr.splice(ind,1)
//     setData([...arr])
//   }
//   return (
//     <div className="App">
//       {/* <Header /> */}
//       <div className="form">
//         <Stack direction="row" spacing={3}>
//           <TextField
//             id="outlined-basic"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             label="name"
//             variant="outlined"
//             autoComplete="of"
//           />
//           <TextField
//             id="outlined-basic"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             label="age"
//             variant="outlined"
//             autoComplete="of"

//           />
//           <TextField
//             id="outlined-basic"
//             value={email}
//             label="email"
//             onChange={(e) => setEmail(e.target.value)}
//             variant="outlined"
//             autoComplete="of"

//           />
//           <Button variant="contained" onClick={addData} color="success">
//             <AddIcon />
//           </Button>
//         </Stack>
//       </div>
//       <div className="data">
//         <div className="data_re">
//           <h4>Name</h4>
//           <h4>Email</h4>
//           <h4>age</h4>
//           <h4>Remove</h4>
//         </div>

//         {data.map((ele, ind) => {
//           return (
//             <div className="data_re" style={{color:"green"}}>
//               <h4>{ele.name}</h4>
//               <h4>{ele.email}</h4>
//               <h4>{ele.age}</h4>
//               <Stack>
//                 <Button onClick={()=>removeData(ind)}  color="error">
//                   <DeleteIcon/>
//                 </Button>
//               </Stack>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;






































// // const Header = () => {
// //   return (
// //     <div className="header">Recording Keeping</div>
// //   )
// // }

// // export default Header

































// // movie project use in props method

// // import Header from "./component/header";
// // import Movie from "./component/Movie";
// // import movies from "./movies.json";

// // function App() {
// //   return (
// //     <div className="App">
// //       <Header />
// //       <div className="main">
// //         {movies.map((ele) => {
// //           return <Movie title={ele.Title} year={ele.Year} img={ele.Poster} />;
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
