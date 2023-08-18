import React from 'react';
import s from './Friends.module.css'
import FriendUsers from './FriendUser/FriendUser.jsx';

const Friends = () => {
    return (
        <div className={s.friends_list}>
            <FriendUsers
                path='https://this-person-does-not-exist.com/img/avatar-gen1100f76f4e8987b74901311a50821225.jpg'
                name='Артур Семченко' />
            <FriendUsers
                path='https://this-person-does-not-exist.com/img/avatar-gen0ae453a006ab71a0b90a357edb271688.jpg'
                name='Андрей Пушкарёв' />
        </div>
    )
}

export default Friends;

{/* <div className={s.friends_users}>
                <div className={s.friends_users_photo}>
                    <img src='https://this-person-does-not-exist.com/img/avatar-gend91fb822832d6252118215d90cd79996.jpg'></img>
                </div>
                <div className={s.friends_users_info}>Илья Морозов</div>
                <div className={s.friends_action_menu}>x</div>
            </div> */}



{/* <div className={s.friends_users}>
                <div className={s.friends_users_photo}>
                    <img src='https://this-person-does-not-exist.com/img/avatar-gen112274cfad450e7230ba8ed98e7b9e95.jpg'></img>
                </div>
                <div className={s.friends_users_info}>Егор Чижиков</div>
                <div className={s.friends_action_menu}>x</div>
            </div>
            <div className={s.friends_users}>
                <div className={s.friends_users_photo}>
                    <img src='https://this-person-does-not-exist.com/img/avatar-gena9388e8ed93db61fee2677c7db34d80c.jpg'></img>
                </div>
                <div className={s.friends_users_info}>Петя Григорьев</div>
                <div className={s.friends_action_menu}>x</div>
            </div>
            <div className={s.friends_users}>
                <div className={s.friends_users_photo}>
                    <img src='https://this-person-does-not-exist.com/img/avatar-gen7c72a069f8a690ad3194f35804519bb5.jpg'></img>
                </div>
                <div className={s.friends_users_info}>Антон Пешкин</div>
                <div className={s.friends_action_menu}>x</div>
            </div> */}