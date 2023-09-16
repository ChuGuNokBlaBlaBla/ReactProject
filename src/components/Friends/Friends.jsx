import React from 'react';
import s from './Friends.module.css'
import FrinedsListContainer from './FriendsListContainer';

const Friends = (props) => {
    
    return (
        <div className={s.friends_list}>
            <FrinedsListContainer />
        </div>
    )
}

export default Friends;