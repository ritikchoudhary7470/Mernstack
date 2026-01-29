import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUpData from './components/SingUpData'

const App = () => {
  const [ formData , setFormData ] = useState()
  function dataSend(info){
   setFormData(info)
   console.log(setFormData)
  }


  return (
    <div>
     {/* <Navbar/> */}
    
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp dataSend={dataSend}/>}></Route>
      <Route path='signUpData' element={<SingUpData formData={formData}/>}>  </Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
