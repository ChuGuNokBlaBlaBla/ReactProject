import React from 'react';
import s from './FriendUser.module.css'

const FriendUsers = (props) => {
    return (
        <div className={s.friends_users}>
            <div className={s.friends_users_photo}>
                <img src={props.path}></img>
            </div>
            <div className={s.friends_users_info}>Илья Морозов</div>
            <div className={s.friends_action_menu}>x</div>
        </div>
    )
}

export default FriendUsers;