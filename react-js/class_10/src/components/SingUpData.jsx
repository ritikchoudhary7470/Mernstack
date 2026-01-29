import React from 'react'
import Navbar from './Navbar'

const SingUpData = ({formData}) => {
    console.log(formData)
  return (
    <div>
       <Navbar/>

     <div>
       
            <h1> Name = {formData.fname}</h1>
            <h2> LastNAme = {formData.lname}</h2>
            <h3>Eamil = {formData.email}</h3>
            <h4> Password = {formData.password}</h4>
      
     </div>

    </div>
  )
}

export default SingUpData