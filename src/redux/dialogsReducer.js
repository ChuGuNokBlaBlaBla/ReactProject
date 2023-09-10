const dialogsReduser = (state, action) => {

    if (action.type === 'MY-MESSAGE') {
        state.dataMessage = action.myMessage
    } else if (action.type === 'SENT-MESSAGE') {

        let dataSender = {
            myMessage: action.myMessage,
            src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg'
        }
        state.sentMessage.push(dataSender)
        state.dataMessage = '';
    }

    return state

}

export default dialogsReduser;