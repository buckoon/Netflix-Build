import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
};

export const userSlice = createSlice({
  name: "user",
  initialState,
    user:null,
 
  reducers: {
    login: (state, action) => {
     
      state.user = action.payload;
    },

    
    logout: (state) => {
      state.user = null; /*when we logout the user will be set to null */
    },
  },
  
  
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;/*selectUser goes into the state of the store(the global store), goes into the user slice and then gets the user from the store */ 

export default userSlice.reducer;
