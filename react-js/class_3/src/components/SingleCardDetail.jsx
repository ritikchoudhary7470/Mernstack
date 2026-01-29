import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const SingleCardDetail = ({first}) => {
    const navigate = useNavigate()
  return (
    <>

      <div>
        <div className="card" >
        <img src={first?.image} alt="product"  />
        <div className="card-content">
          <h2>id : {first?.id}</h2>
          <p>description : {first?.description}</p>
          <p className="price">price : {first?.price}</p>
          <p className="category">Category : {first?.category}</p>
          <button onClick={()=>{
            navigate(-1)
          }}> Back to Card</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default SingleCardDetail
