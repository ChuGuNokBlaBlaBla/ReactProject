export const getUsers = (state) => {
    return state.friendsReducer.items;
}

export const getTotalCount = (state) => {
    return state.friendsReducer.totalCount;
}

export const getPage = (state) => {
    return state.friendsReducer.page;
}

export const getCount = (state) => {
    return state.friendsReducer.count;
}

export const getRequsetStatus = (state) => {
    return state.friendsReducer.isRequest;
}

export const getFollowedProgress = (state) => {
    return state.friendsReducer.followedProgress;
}

export const getActiveUser = (state) => {
    return state.friendsReducer.activeUser;
}