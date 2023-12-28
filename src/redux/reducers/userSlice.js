 import { createSlice } from '@reduxjs/toolkit'
const userSlice=createSlice({
    name:"user",
    initialState:{
         loginToken:null,
        loginUser:{},

    },
    reducers:{
         assignToLoginToken:(state,action)=>{
            state.loginToken=action.payload
        },
           assignToLoginUserData:(state,action)=>{
            state.loginUser=action.payload
        },
    }
})



export const {assignToLoginToken,assignToLoginUserData}=userSlice.actions

export default userSlice.reducer