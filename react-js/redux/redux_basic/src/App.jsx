import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeName } from './slice/userSlice'
import FamilyWala from './components/FamilyWala'
const App = () => {
  const {username} = useSelector((state)=>{
    // console.log(state)
    return state.user
  })
 const [value , setvalue] =  useState(username)
   
 const dispatch = useDispatch()
  
  return (
    <div>
       
       <div>
        <input type='text' placeholder='Enter Name'
        onChange={(e)=> setvalue(e.target.value)}
        />
        <button onClick={()=> dispatch(changeName(value))}>Change Name</button>
        <p><mark>UserName : {username}</mark></p>
       </div>

      <FamilyWala/>
    </div>
  )
}

export default App
