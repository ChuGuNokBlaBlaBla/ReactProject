import { createSlice } from "@reduxjs/toolkit";

// const friendsList = {
//     dataUserPage: [
//         { id: 0, name: 'Артур Семченко', photo: { large: 'https://this-person-does-not-exist.com/img/avatar-gen1100f76f4e8987b74901311a50821225.jpg', mall: null, }, followed: true },
//         { id: 1, name: 'Андрей Пушкарёв', photo: { large: 'https://this-person-does-not-exist.com/img/avatar-gen0ae453a006ab71a0b90a357edb271688.jpg', small: null, }, followed: false },
//         { id: 2, name: 'Семён Игоревич', photo: { large: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg', small: null, }, followed: true },
//         { id: 3, name: 'Виктор Иванович', photo: { large: 'https://this-person-does-not-exist.com/img/avatar-gen1180a45e2d8bd4c08325163b067fba97.jpg', small: null, }, followed: true },
//     ]
// }

const friendsReducer = createSlice({
    name: 'friends',
    initialState: {
        items: [],
        totalCount: 0,
        count: 10,
        page: 1,
        isRequested: false,
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
        }
    }
})

export const { getInitialState, getNumberPage, isRequested, follow, unfollow } = friendsReducer.actions;

export default friendsReducer.reducer