import { createSlice, current } from "@reduxjs/toolkit";
console.log("family slice");
export const familySlice = createSlice({
  name: "familyData",
  initialState: {
    adress: " kampel",
    age: 20,
    place: "indore",
  },
  reducers: {
    // changeName: (state, action) => {
    //   state.username = action.payload; // payload is a object
    //   console.log(action.payload);
    //   console.log(current(state));
    // },

    bestway : {
        prepare : (adressWala , agewala , placeWala)=>{
           return { payload : {adressWala , agewala , placeWala}}
        }, 
        reducer : (state,action) => {
         state.adress = action.payload.adressWala;
         state.age = action.payload.agewala;
         state.place = action.payload.placeWala;
        }
    }

  },
});

export const { bestway } = familySlice.actions;
export default familySlice.reducer;
