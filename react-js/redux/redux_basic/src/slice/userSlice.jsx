import { createSlice, current } from "@reduxjs/toolkit";
console.log("slice");
export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: " Ritik",

  },
  reducers: {
    changeName: (state, action) => {
        state.username = action.payload;        // payload is a object
        console.log(action.payload);

      console.log(current(state))
      //   console.log(state)         // prepare
    },
  },
});

export const { changeName } = userSlice.actions;
export default userSlice.reducer;
