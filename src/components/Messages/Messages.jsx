import React from 'react';
import s from './Messages.module.css';
import ContListMessage from './BlockMessage/BlockMessage';

const Messages = (props) => {
    return (
        <div className={s.wrapMessages}>
            <div>
                <ContListMessage />
            </div>
        </div>
    )
}

export default Messages;