import React from 'react';
import { useSelector } from 'react-redux';
import FriendUsers from './FriendUser/FriendUser';

const FrinedsListContainer = () => {

    const getListFriends = useSelector(state => state.profilePage.dataUserPage)
    
    return (
        <FriendUsers listFriends={getListFriends} />
    )
}

export default FrinedsListContainer