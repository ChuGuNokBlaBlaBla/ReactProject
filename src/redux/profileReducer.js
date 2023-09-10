const profileReducer = (state, action) => {

    if (action.type === 'CHANGE-VALUE-POST') {
        state.changeDataText = action.textPost
    } else if (action.type === 'ADD-POST') {
        let newDataObj = {
            message: action.textPost,
            src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg'
        }
        state.dataPosts.push(newDataObj);
        state.changeDataText = '';
    }

    return state
}

export default profileReducer;