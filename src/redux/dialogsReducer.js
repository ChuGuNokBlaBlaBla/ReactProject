import { createSlice } from "@reduxjs/toolkit";

const initialStateDialogs = {
    sentMessage: [],
    valueMessage: ''
}

const dialogsReduser = createSlice({
    name: 'dialogs',
    initialState: {...initialStateDialogs},
    reducers: {
        newMessage(state, action) {
            state.sentMessage = [...state.sentMessage]
            state.sentMessage.push({
                myMessage: action.payload,
                src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg'
            })
            state.valueMessage = '';
        },
        changeText(state, action) {
            state.valueMessage = action.payload
        }
    }
})

export const { newMessage, changeText } = dialogsReduser.actions

export default dialogsReduser.reducer