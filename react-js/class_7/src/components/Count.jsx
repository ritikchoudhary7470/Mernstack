import React from 'react'
import { useState } from 'react'
const Count = () => {

    const [count, setCount] = useState(0)
     console.log(count)
  return (
    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increament</button>
      <h2>{count}</h2>
      <button onClick={()=>{
        setCount(count-1)
      }}>Decrement</button>
    </div>
  )
}

export default Count
