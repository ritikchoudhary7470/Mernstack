import { useState } from 'react'
import './Home.css'


const Home = ({ products ,single,setSingle}) => {
// const [singleData , setSingleData] = useState()

let doubleData
function sendData(info){

  doubleData = single.some((e)=>{
   return e == info
 })
if(doubleData){
  return false
}
 setSingle((oldData)=>{
  return([...oldData,info])
 })

}

   

  return (
    <>
      

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            
              <img src={item.image} alt={item.productName} />

            <div className="product-content">
              <p className="product-name">{item.productName}</p>
              <p className="product-price">₹ {item.productPrice}</p>
              <p className="product-description">{item.description}</p>
            </div>
            <button  className="add-btn" onClick={()=>{
                sendData(item)
                
                
            }}>Add To Cart</button>
         
          </div>
        ))}
      </div>

   
    </>
  )
}

export default Home
