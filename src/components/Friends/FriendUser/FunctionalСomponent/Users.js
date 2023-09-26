import React from 'react';
import s from '../FriendUser.module.css'
import icon from '../../../../assets/icon.png'
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    const disabledBtn = (userId)=> {
        return props.followedProgress.some((id) => id === userId)
    }

    return (
        props.users.length !== 0 ? props.users.map((user => {

            return (
                <div key={user.id} className={s.friends_users} id={user.id}>
                    <div className={s.wrap_user_info}>
                        <div className={s.friends_users_photo}>
                            <NavLink to={`/friends/page/${user.id}`}>
                                <img src={user.photos.large === null ? icon : user.photos.large}></img>
                            </NavLink>
                        </div>
                        <div className={s.friends_users_name}>{user.name}</div>
                    </div>
                    <div className={s.message_friends}>{props.message}</div>
                    <div className={s.friends_action_menu}>

                        {user.followed === true ?
                            <button disabled={disabledBtn(user.id)} onClick={() => {
                                props.unfollow(user.id)
                            }}>Отписаться</button>
                            : <button disabled={disabledBtn(user.id)} onClick={() => {
                                props.follow(user.id)
                            }}>Подписаться</button>}
                    </div>
                </div>
            )
        })) : <button onClick={() => { props.getUsers(1) }}>Получить список пользователей</button>
    )
}

export default Users;