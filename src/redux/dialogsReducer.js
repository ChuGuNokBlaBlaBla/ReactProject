import { createSlice } from "@reduxjs/toolkit";

const initialStateDialogs = {
    fildName: 'message',
    sentMessage: [],
    valueMessage: ''

}

const dialogsReducer = createSlice({
    name: 'dialogs',
    initialState: {...initialStateDialogs},
    reducers: {
        newMessage(state, action) {
            state.sentMessage = [...state.sentMessage]
            state.sentMessage.push({
                myMessage: action.payload.message,
                src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg'
            })
        }
    }
})

export const { newMessage } = dialogsReducer.actions

export default dialogsReducer.reducer