import React from 'react';
import s from './Friends.module.css'
import FriendUsers from './FriendUser/FriendUser.jsx';

const Friends = (props) => {
    
    return (
        <div className={s.friends_list}>
            <FriendUsers listFriends={props.state} /> 
        </div>
    )
}

export default Friends;