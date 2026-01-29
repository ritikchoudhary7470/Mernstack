import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../slice/userSlice'
import familyReducer from '../slice/familySlice'
console.log("store")

export const Store = configureStore ({
reducer : {
  user : userReducer,
  familyData : familyReducer

}
})
    
