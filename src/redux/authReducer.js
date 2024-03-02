import { createSlice } from "@reduxjs/toolkit";
import { apiUsers, profileApi } from "../api/userApi";

const initialStateAuth = {
    resultCode: null,
    authMe: false,
    status: null,
    profilePage: {}
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
    }
})

export const { setDataAuth, authSucces, setDataProfile, setStatus } = authReducer.actions

export const myLogin = () => {
    return (dispatch) => {
        apiUsers().myLogin().then((response) => {
            dispatch(setDataAuth(response.data))
        })
    }
}

export const getDataProfile = (userId) => {
    return (dispatch) => {
        profileApi().getDataProfile(userId).then((response) => {
            dispatch(setDataProfile(response.data))
            dispatch(getStatus(response.data.userId))
        })
    }
}

export const logIn = (email, password, rememberMe) => {
    return (dispatch) => {
        profileApi().logIn(email, password, rememberMe).then((response) => {
            dispatch(getDataProfile(response.data.data.userId))
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
        profileApi().getStatus(userId).then((response) => {console.log(response.data);
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