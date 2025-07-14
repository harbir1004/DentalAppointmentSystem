import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  _id: "",
  firstname: "",
  email: "",
}
  
  export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      loginRedux: (state, action) => {
        // state.users = action.payload.data;
        state._id= action?.payload?._id
        state.firstname = action?.payload?.firstname
        state.email = action?.payload?.email
 

       },
       logoutRedux : (state, action) => {
        state._id= ""
        state.firstname = ""
        state.email = ""

       },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loginRedux, logoutRedux } = userSlice.actions;

  export default userSlice.reducer;