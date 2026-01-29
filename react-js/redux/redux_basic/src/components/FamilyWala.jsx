import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bestway } from '../slice/familySlice'

const FamilyWala = () => {
 
    const { adress , age , place} = useSelector( (state) =>{
        console.log(state.familyData)
          return state.familyData
    })
    const dispatch = useDispatch()

  return (
    <div>
      <div>
        <p>Adress : <b>{adress}</b></p>
        <p>Age : <b>{age}</b></p>
        <p>Place : <b>{place}</b></p>
      </div>
      <button onClick={ ()=>{
         dispatch(bestway('pipalda', '21' , 'dewas'))
      } }>Change Data</button>
    </div>
  )
}

export default FamilyWala
