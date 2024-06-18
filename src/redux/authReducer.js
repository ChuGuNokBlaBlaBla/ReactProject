import { createSlice } from "@reduxjs/toolkit";
import { apiUsers, profileApi } from "../api/userApi";

const initialStateAuth = {
    resultCode: null,
    authMe: false,
    status: null,
    profilePage: {},
    userId: null,
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
        },
        setDataProfile(state, action){
            state.profilePage = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        setUserId(state, action) {
            state.userId = action.payload
        }
    }
})

export const { setDataAuth, authSucces, setDataProfile, setStatus, setUserId } = authReducer.actions

export const myLogin = () => {
    return (dispatch) => {
        apiUsers().myLogin().then((response) => {
            console.log(response);
            dispatch(setDataAuth(response.data))
            // dispatch(setStatus(response.data))
            dispatch(setUserId(response.data.data.id))
        })
    }
}

export const getDataProfile = (userId) => {
    return (dispatch) => {
        profileApi().getDataProfile(userId).then((response) => {
            dispatch(setDataProfile(response.data))
        })
    }
}

export const logIn = (email, password, rememberMe) => {
    return (dispatch) => {
        profileApi().logIn(email, password, rememberMe).then((response) => {
            dispatch(myLogin(response.data.data.userId))
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

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi().getStatus(userId).then((response) => {
            dispatch(setStatus(response.data))
        })
    }
}

export const statusUpdate = (status) => {
    return (dispatch) => {
        profileApi().statusUpdate(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default authReducer.reducer