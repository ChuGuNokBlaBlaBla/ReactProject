import { createSlice } from "@reduxjs/toolkit";

const dialogsReduser = createSlice({
    name: 'dialogs',
    initialState: {
        sentMessage: [],
        valueMessage: ''
    },
    reducers: {
        newMessage(state, action) {
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

export const {newMessage, changeText} = dialogsReduser.actions

export default dialogsReduser.reducer


// const dialogsReduser = (state, action) => {

//     if (action.type === 'MY-MESSAGE') {
//         state.valueMessage = action.myMessage
//     } else if (action.type === 'SENT-MESSAGE') {

// let dataSender = {
//     myMessage: action.myMessage,
//     src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg'
// }
// state.sentMessage.push(dataSender)
// state.valueMessage = '';
//     }

//     return state

// }

// export default dialogsReduser;