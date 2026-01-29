import  { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const App = () => {

  const [apiData , setApiData] = useState([])

  async function apiCalling(url){
   let response = await fetch(url);
   let ans = await response.json()
  //  console.log(ans)
   setApiData(ans)
  }

  useEffect(()=>{
    apiCalling(`https://fakestoreapi.com/products`)
  },[])
  return (
    <div>
      <Navbar/>

     <Routes>
      <Route path='/' element={<Home data={apiData}/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>

    </div>
  )
}

export default App
