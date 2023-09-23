import { createSlice } from "@reduxjs/toolkit";

const friendsReducer = createSlice({
    name: 'friends',
    initialState: {
        items: [],
        totalCount: 0,
        count: 10,
        page: 1,
        isRequested: false,
        dataFriend: null,
        activeUser: null,
    },
    reducers: {
        getInitialState(state, action) {
            state.items = action.payload.items
            state.totalCount = action.payload.totalCount
        },
        getNumberPage(state, action) {
            state.page = action.payload
        },
        isRequested(state, action) {
            state.isRequested = action.payload
        },
        setUser(state, action) {
            state.activeUser = action.payload
            console.log(state.activeUser)
        },
        follow(state, action) {
            state.items.map((user) => {
                if (action.payload === user.id) {
                    return user.followed = true
                }
                return user
            })
        },
        unfollow(state, action) {
            state.items.map((user) => {
                if (user.id === action.payload) {
                    return user.followed = false
                }
                return user
            })
        },
        setDataUser(state, action){
            state.dataFriend = action.payload
        }
    }
})

export const { getInitialState, getNumberPage, isRequested, setUser, follow, unfollow } = friendsReducer.actions;

export default friendsReducer.reducer