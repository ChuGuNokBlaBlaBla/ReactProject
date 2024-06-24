export const getUser = (state) => {
    return state.profileReducer.myData;
}

export const getUserId = (state) => {
    return state.authReducer.userId;
}

export const getStatusProfile = (state) => {
    return state.authReducer.status;
}

export const getValuePost = (state) => {
    return state.profileReducer.valueTextPost;
}

export const getDataSentPost = (state) => {
    return state.profileReducer.sectionPost.dataPosts;
}

export const getFildName = (state) => {
    return state.profileReducer.sectionPost.fildName;
}



