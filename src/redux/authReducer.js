import { createSlice } from "@reduxjs/toolkit";
import { apiUsers } from "../api/userApi";

const initialStateAuth = {
    data: {},
    resultCode: null,
    authMe: false,
}

const authReducer = createSlice({
    name: 'auth',
    initialState: initialStateAuth,
    reducers: {
        setDataAuth(state, action) {
            state.data = action.payload.data
            state.resultCode = action.payload.resultCode
            state.resultCode === 0? state.authMe = true: state.authMe = false
            
        }
    }
})

export const { setDataAuth } = authReducer.actions

export const myLogin = ()=> {
    return (dispatch)=> {
        apiUsers().myLogin().then((list)=>{
            dispatch(setDataAuth(list.data))
        })
    }
}

export default authReducer.reducer