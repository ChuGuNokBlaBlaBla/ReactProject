import React from 'react';
import s from './FriendUser.module.css'
import axios from 'axios';
import icon from '../../../assets/icon.png'

const FreindsProfileGet = (props) => {

    const getListUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((list) => {
            props.getData(list.data)
        })
    }

    if (props.users) {
        return <div>
            {
                props.users.map((user => {
                    return (
                        <div key={user.id} className={s.friends_users} id={user.id}>
                            <div className={s.wrap_user_info}>
                                <div className={s.friends_users_photo}>
                                    <img src={!user.photos.large ? icon : user.photos.large}></img>
                                </div>
                                <div className={s.friends_users_name}>{user.name}</div>
                            </div>
                            <div className={s.message_friends}>{props.message}</div>
                            <div className={s.friends_action_menu}>
                                {user.followed === true ? <button onClick={() => props.unfollow(user.id)}>Отписаться</button> :
                                    <button onClick={() => { props.follow(user.id) }}>Подписаться</button>}
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    }

    return <div><button onClick={getListUsers}>Получить список пользователей</button></div>

}

export default FreindsProfileGet;