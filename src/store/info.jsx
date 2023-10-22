import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name :"",
    email : ""
}


const info = createSlice({
    name : "info",
    initialState,
    reducers : {
        CREATE_ACCOUNT : (state,action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    }
})


export const {CREATE_ACCOUNT} = info.actions
export default info.reducer