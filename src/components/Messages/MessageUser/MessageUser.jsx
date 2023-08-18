import React from 'react';
import s from './MessageUser.module.css';
import { NavLink } from 'react-router-dom';

let f = [
    {
        name: 'Артур Семченко',
        src: 'https://this-person-does-not-exist.com/img/avatar-gen1100f76f4e8987b74901311a50821225.jpg',
        message: 'Сообщение от Артура',
        id: '1'
    },
    {
        name: 'Андрей Пушкарёв',
        src: 'https://this-person-does-not-exist.com/img/avatar-gen0ae453a006ab71a0b90a357edb271688.jpg',
        message: 'Сообщение от Андрея',
        id: '2'
    },
    {
        name: 'Петя Григорьев',
        src: 'https://this-person-does-not-exist.com/img/avatar-gena9388e8ed93db61fee2677c7db34d80c.jpg',
        message: 'Сообщение от Пети?',
        id: '3'
    },

]

let renderMessageFriends = f.map((f) => {
    return (
        <div className={s.wrapMessageUser}>
            <NavLink to={"/messages/" + f.id} className={({ isActive }) => isActive ? s.active : ""}>
                <div id={f.id} className={s.senderPhoto}>
                    <div className={s.messageUser}>
                        <img src={f.src}></img>
                    </div>
                    <div>
                        <div className={s.senderName}>{f.name}</div>
                        <div className={s.senderMessage}>{f.message}</div>
                    </div>
                </div>
            </NavLink>
        </div>
    )

})


const MessageUser = () => {
    return (
        { renderMessageFriends }
    )
}

export default MessageUser;

{/* <div className={s.wrapMessageUser}>
    <NavLink to={path} className={({ isActive }) => isActive ? s.active : ""}>
        <div id={props.id} className={s.senderPhoto}>
            <div className={s.messageUser}>
                <img src={props.src}></img>
            </div>
            <div>
                <div className={s.senderName}>{props.name}</div>
                <div className={s.senderMessage}>{props.message}</div>
            </div>
        </div>
    </NavLink>
</div> */}