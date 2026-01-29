import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Card.css'
import SingleCardDetail from './SingleCardDetail'
import { useNavigate } from 'react-router-dom'

const Card = ({first , getData}) => {
const [card, setcard] = useState([])
const navigate = useNavigate();

async function callCardApi() {
  try {
    let res = await fetch('https://fakestoreapi.com/products/')
    let ans = await res.json()
    console.log(ans)
    setcard(ans)
  } catch (err) {
    console.log('error' , err)
  }
}
useEffect(() => {
  callCardApi()
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="card-page">
      {card.map((item)=>(
          <div className="card" key={item.id}>
        <img src={item?.image} alt="product"/>
        <div className="card-content">
          <h2>id : {item?.id}</h2>
          {/* <p>description : {item?.description}</p> */}
          {/* <p className="price">price : {item?.price}</p> */}
          <p className="category">Category  : {item?.category }</p>
          <button onClick={()=>{
            getData(item)
            navigate(`/single-card/${item?.id}`)
          }}> View Details</button>
        </div>
      </div>
      ))
      }

    </div>
   
    
    </>

  )
}

export default Card
