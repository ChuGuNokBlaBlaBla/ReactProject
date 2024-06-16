import { createSlice } from "@reduxjs/toolkit";
import { apiUsers, profileApi } from "../api/userApi";

const initialStateAuth = {
    resultCode: null,
    authMe: false,
    profilePage: {},
    gettingMyProfileData: {
        userId: null,
        aboutMe: "я обычный парень",
        lookingForAJob: "в поиске новых знаний",
        fullName: "Старый",
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://naked-science.ru/wp-content/uploads/2016/04/article_supercoolpics_01_10072012124623.jpg"
        },
        status: ' ',
        editMode: false,
        dataPost: [
            {
                message: 'Привет, это мой первый пост',
                src: 'https://this-person-does-not-exist.com/img/avatar-gen1100f76f4e8987b74901311a50821225.jpg',
                id: 1,
            },
            {
                message: 'Привет, это мой второй пост',
                src: 'https://this-person-does-not-exist.com/img/avatar-gen0ae453a006ab71a0b90a357edb271688.jpg',
                id: 2,
            }
        ]
    }
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
        setDataProfile(state, action) {
            state.profilePage = action.payload
        },
        setStatus(state, action) {
            state.gettingMyProfileData.status = action.payload
        },
        setUserId(state, action) {
            state.gettingMyProfileData.userId = action.payload
        },
        newPost(state, action) {
            state.gettingMyProfileData.dataPost.push({
                message: action.payload.mySentPost,
                src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg'
            })
            state.valueTextPost = '';
        },
    // ----------------редьюсеры с profileReducer -----------------
        changeStatus(state, action) {
            state.gettingMyProfileData.status = action.payload
        },
        changeEditMode(state, action) {
            state.gettingMyProfileData.editMode = action.payload
        },
        changeStatusMessage(state, action) {
            state.gettingMyProfileData.status = action.payload
        },
    //-------------------------------------------------------------
    }
})

export const { setDataAuth, authSucces, setDataProfile, setStatus, setUserId, changeStatus, changeEditMode, changeStatusMessage, newPost } = authReducer.actions

export const myLogin = () => {
    return (dispatch) => {
        apiUsers().myLogin().then((response) => {
            dispatch(setDataAuth(response.data))
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