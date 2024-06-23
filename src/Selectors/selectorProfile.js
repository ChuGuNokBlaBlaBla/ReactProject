export const getUser = (state) => {
    return state.profileReducer.myData;
}

export const getUserId = (state) => {
    return state.authReducer.userId;
}

export const getStatusProfile = (state) => {
    return state.profileReducer.status;
}

export const getValuePost = (state) => {
    return state.profileReducer.valueTextPost;
}



