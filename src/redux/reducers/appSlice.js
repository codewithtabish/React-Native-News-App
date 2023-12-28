 import { createSlice } from '@reduxjs/toolkit'
const appSlice=createSlice({
    name:"app",
    initialState:{
          appDialouge:false,
    },
    reducers:{
         assignToDialouge:(state,action)=>{
            state.appDialouge=action.payload
        },
    }
})



export const {assignToDialouge}=appSlice.actions

export default appSlice.reducer