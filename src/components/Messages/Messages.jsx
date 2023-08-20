import React from 'react';
import s from './Messages.module.css';
import RenderListMessage from './BlockMessage/BlockMessage';

const Messages = (props) => {
    return (
        <div className={s.wrapMessages}>
            <div>
                <RenderListMessage state={props.state}/>
            </div>
        </div>
    )
}

export default Messages;