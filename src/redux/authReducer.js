import { createSlice } from "@reduxjs/toolkit";
import { apiUsers, profileApi } from "../api/userApi";

const initialStateAuth = {
    resultCode: null,
    authMe: false,
}

const authReducer = createSlice({
    name: 'auth',
    initialState: initialStateAuth,
    reducers: {
        setDataAuth(state, action) {
            state.resultCode = action.payload.resultCode
            state.resultCode === 0 ? state.authMe = true : state.authMe = false

        },
        authSucces(state, action) {
            state.authMe = action.payload
        }
    }
})

export const { setDataAuth, authSucces } = authReducer.actions

export const myLogin = () => {
    return (dispatch) => {
        apiUsers().myLogin().then((response) => {
            dispatch(setDataAuth(response.data))
        })
    }
}

export const logIn = (email, password, rememberMe) => {
    return (dispatch) => {
        profileApi().logIn(email, password, rememberMe).then((response) => {
            dispatch(myLogin())
        })
    }
}

export const exitProfile = () => {
    return (dispatch) => {
        profileApi().logOut().then((response) => {
            dispatch(setDataAuth(1))
        })
    }
}

export default authReducer.reducer