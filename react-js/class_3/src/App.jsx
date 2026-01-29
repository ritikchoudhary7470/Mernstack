import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Card from "./components/Card"
import SingleCardDetail from "./components/SingleCardDetail"
import { useState } from "react"


function App() {

  const [first, setfirst] = useState([])
  function getData(info) {
    setfirst(info)
  }
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/about" element={<About/>}></Route>    
        <Route path="/card" element={<Card getData={getData}/>}></Route>
        <Route path="/single-card/:id"  element={<SingleCardDetail first={first}/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
