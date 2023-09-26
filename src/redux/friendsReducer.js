import { createSlice } from "@reduxjs/toolkit";
import { apiUsers } from "../api/userApi";

const friendsReducer = createSlice({
    name: 'friends',
    initialState: {
        items: [],
        totalCount: 500,
        count: 10,
        page: 1,
        isRequest: false,
        dataFriend: null,
        activeUser: null,
        subStatus: false,
        followedProgress: []
    },
    reducers: {
        getInitialState(state, action) {
            state.items = action.payload.items
            // state.totalCount = action.payload.totalCount
        },
        getNumberPage(state, action) {
            state.page = action.payload
        },
        isRequest(state, action) {
            state.isRequest = action.payload
        },
        isSubStatus(state, action) {
            state.subStatus = action.payload
        },
        setUser(state, action) {
            state.activeUser = action.payload
        },
        processFollow(state, action) {
            state.items.map((user) => {
                return action.payload === user.id ? user.followed = true : false
            })
        },
        processUnfollow(state, action) {
            state.items.map((user) => {
                return user.id === action.payload ? user.followed = false : true
            })
        },
        setDataUser(state, action) {
            state.dataFriend = action.payload
        },
        statusFollow(state, action) {
            state.followedProgress = state.subStatus ? [...state.followedProgress, action.payload]
                : [...state.followedProgress.filter((item) => item !== action.payload)]
        }
    }
})



export const { getInitialState, getNumberPage, isRequest, isSubStatus, setUser, processFollow, processUnfollow, statusFollow } = friendsReducer.actions;

export const getListUsers = (page, count) => {
    return (dispatch) => {
        dispatch(getNumberPage(page))
        dispatch(isRequest(true))
        apiUsers().getUsersAPI(page, count).then((list) => {
            dispatch(getInitialState(list.data))
            dispatch(isRequest(false))
        })

    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(isSubStatus(true))
        dispatch(statusFollow(userId))
        apiUsers().followUser(userId).then((list) => {
            dispatch(isSubStatus(false))
            if (list.data.resultCode === 0) {
                dispatch(processFollow(userId))
                dispatch(statusFollow(userId))
            }
        })
    }
}


export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(isSubStatus(true))
        dispatch(statusFollow(userId))
        apiUsers().unfollowUser(userId).then((list) => {
            dispatch(isSubStatus(false))
            if (list.data.resultCode === 0) {
                dispatch(processUnfollow(userId))
                dispatch(statusFollow(userId))
            }
        })
    }
}

export const createProfileFrined = (paramsId) => {
    return (dispatch) => {
        apiUsers().renderProfileFriend(paramsId).then((list) => {
            dispatch(setUser(list.data))
        })
    }
}
window.store = friendsReducer
export default friendsReducer.reducer