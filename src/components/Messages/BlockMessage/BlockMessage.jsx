import React from 'react';
import SendMessage from './MyMessage/SendMessage'
import MyMessage from './MyMessage/MyMessage'

const ContListMessage = (props) => {
    return (
        <div>
            <SendMessage dataSentMessage={props.dataSentMessage} />
            <MyMessage
                dispatch={props.dispatch}
                valueMessage={props.valueMessage}
                changeText={props.changeText}
                newMessage={props.newMessage}
            />
        </div>
    )
}

export default ContListMessage;