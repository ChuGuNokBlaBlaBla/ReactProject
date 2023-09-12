import React from 'react';
import s from './Messages.module.css';
import ContListMessage from './BlockMessage/BlockMessage';
import { useDispatch, useSelector } from 'react-redux';
import { changeText, newMessage } from '../../redux/dialogsReducer';

const Messages = () => {

    const dispatch = useDispatch();
    const dataSentMessage = useSelector(state => state.dialogs.sentMessage)
    const valueMessage = useSelector(state => state.dialogs.valueMessage)

    return (
        <div className={s.wrapMessages}>
            <div>
                <ContListMessage
                    dataSentMessage={dataSentMessage}
                    dispatch={dispatch}
                    valueMessage={valueMessage}
                    changeText={changeText}
                    newMessage={newMessage}
                />
            </div>
        </div>
    )
}

export default Messages;