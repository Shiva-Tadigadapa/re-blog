import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user : null,
    loading: false,
    error: false,
  },
  reducers: {
    loginStart:(state)=>{
        state.loading=true
    },
    loginSuccess:(state,action)=>{
        state.loading=true;
        state.user=action.payload;
    },
    loginFailure:(state)=>{
        state.loading=true;
        state.error=true;
    },
    logout1:(state)=>{
        state.user=null;
        state.loading=false;  
        state.error=false;
    },
    tagList:(state,action)=>{
        state.tagList=action.payload;
    },
    
  },
})

// export const {}
export const {loginStart,loginSuccess,loginFailure,logout1,tagList}=userSlice.actions;

export const selectUser = (state) => state.user.user;
export const SelectTagList = (state) => state.user.tagList;
export default userSlice.reducer;