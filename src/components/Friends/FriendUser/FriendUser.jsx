import React from 'react';
import s from './FriendUser.module.css'

const FriendUsers = (props) => {

    return (
        props.listFriends.map((f) => {
            return (
                <div className={s.friends_users} id={f.id}>
                    <div className={s.friends_users_photo}>
                        <img src={f.src}></img>
                    </div>
                    <div className={s.friends_users_info}>{f.name}</div>
                    <div className={s.friends_action_menu}>x</div>
                </div>
            )
        })

    )
}

export default FriendUsers;