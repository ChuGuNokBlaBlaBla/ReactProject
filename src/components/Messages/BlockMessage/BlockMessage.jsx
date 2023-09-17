import React from 'react';
import SendMessage from './MyMessage/SendMessage'
import MyMessage from './MyMessage/MyMessage'
import { useDispatch, useSelector } from 'react-redux';
import { changeText, newMessage } from '../../../redux/dialogsReducer';


const ContListMessage = (props) => {

    const dispatch = useDispatch();
    const dataSentMessage = useSelector(state => state.dialogs.sentMessage)
    const valueMessage = useSelector(state => state.dialogs.valueMessage)

    return (
        <div>
            <SendMessage dataSentMessage={dataSentMessage} />
            <MyMessage
                dispatch={dispatch}
                valueMessage={valueMessage}
                changeText={changeText}
                newMessage={newMessage}
            />
        </div>
    )
}

export default ContListMessage;