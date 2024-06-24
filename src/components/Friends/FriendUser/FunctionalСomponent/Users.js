import React from 'react';
import s from '../FriendUser.module.css'
import icon from '../../../../assets/icon.png'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../../../redux/friendsReducer';

const Users = (props) => {

    const disabledBtn = (userId) => {
        return props.controlListUsers.followedProgress.some((id) => id === userId)
    }

    return (
        props.controlListUsers.users.length !== 0 ? props.controlListUsers.users.map((user => {

            return (
                <div key={user.id} className={s.friends_users} id={user.id}>
                    <div className={s.wrap_user_info}>
                        <div className={s.friends_users_photo}>
                            <NavLink to={`/friends/page/${user.id}`} onClick={() => props.setUser(user.id)}>
                                <img src={user.photos.large === null ? icon : user.photos.large}></img>
                            </NavLink>
                        </div>
                        <div className={s.friends_users_name}>{user.name}</div>
                    </div>
                    <div className={s.message_friends}>{props.controlListUsers.message}</div>
                    <div className={s.friends_action_menu}>

                        {user.followed === true ?
                            <button disabled={disabledBtn(user.id)} onClick={() => {
                                props.controlListUsers.unfollow(user.id)
                            }}>Отписаться</button>
                            : <button disabled={disabledBtn(user.id)} onClick={() => {
                                props.controlListUsers.follow(user.id)
                            }}>Подписаться</button>}
                    </div>
                </div>
            )
        })) : <button onClick={() => { props.getUsers(1) }}>Получить список пользователей</button>
    )
}

export default connect(null, {setUser})(Users);