import React from 'react'
import { useState } from 'react'

const ChangeData = () => {

//    let data = 123
//    console.log(data)

  const [data, setData] = useState(234)
  console.log(data)                    // 2 barr run hoga pahele or baad dono time
  return (
    <>

     <div>
        <h1>data value : {data} </h1>
        <button onClick={()=>{
            console.log(data)
            // data = 556
            setData(556)
            console.log(data)
}}>Change</button>
     </div>

    </>
  )
}

export default ChangeData
