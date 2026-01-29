import React, { useEffect, useState } from "react";
import { Routes,Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  // let username = 'speed to hai'
  // const [username, setUsername] = useState("speed up");
  const [info, setinfo] = useState([]);

  async function callApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const ans = await res.json();
    console.log(ans);
    setinfo(ans);
  }

  useEffect(() => {
    callApi();
    // const res =  fetch('https://jsonplaceholder.typicode.com/albums')
    // const ans =  res.json()
    // console.log(ans)
    // setinfo(ans)
  }, []);
  return (
    <>

     <Routes>
       <Route path="/" element={<About/>}></Route>
       <Route path="/" element={<Home/>}></Route>
     </Routes>


      {/* <div>
        <span>{info[0]?.id}</span> = <span>{info[0]?.title}</span>
      </div>
      <div>
        {info.map( (get) => (
         <p>{get.id}{ get.title}</p>
        ) )}
      </div> */}
    </>
  );
};

export default App;
