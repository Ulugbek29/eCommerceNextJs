import { createSlice } from "@reduxjs/toolkit";

 const authCheck = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        step: 1,
        userData: {}
    },
    reducers: {
        login: (state,{payload})=> {
            state.isAuth = true,
            state.userData = payload
        },
        logout: (state)=> {
            state.isAuth = false
        }
    }
}) 

export default authCheck.reducer;

export const {login, logout} = authCheck.actions
