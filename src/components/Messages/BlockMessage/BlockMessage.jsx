import React from 'react';
import s from './BlockMessage.module.css';
import { NavLink } from 'react-router-dom';

const RenderListMessage = (props) => {
    return (
        props.state.profilePage.dataUserPage.map((f) => {
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
    )
}

export default RenderListMessage;