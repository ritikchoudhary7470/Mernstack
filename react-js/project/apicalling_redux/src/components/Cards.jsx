import React, { useState } from 'react'
import { Card , Button } from 'react-bootstrap'
import Cardsdata from './CardData'
import "./Cards.css"


const Cards = () => {

    const [data , setData] = useState(Cardsdata)
    console.log(data)

  return (
    <>
     <div className='container mt-3 cards-container'>
  <h2 className='text-center title'> Add to Cart</h2>

  <div className='row cards-row'>
    {
      data.map((item,index)=>(
        <Card className="custom-card" key={index}>
          <Card.Img variant="top" src={item.imgdata} className="card-img"/>
          <Card.Body className="card-body">
            <Card.Title className="card-title">Card Title</Card.Title>
            <Card.Text className="card-text">{item.address}</Card.Text>
            <Button className="card-btn" variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))
    }
  </div>
</div>

    </>
  )
}

export default Cards
