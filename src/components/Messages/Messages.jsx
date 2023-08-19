import React from 'react';
import s from './Messages.module.css';
import RenderListMessage from './MessageUser/MessageUser';

const Messages = (props) => {

    return (
        <div className={s.wrapMessages}>
            <div>
                <RenderListMessage listFriends={props.listFriends}/>
            </div>
        </div>
    )
}

export default Messages;