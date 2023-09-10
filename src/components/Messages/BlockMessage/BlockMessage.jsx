import React from 'react';
import s from './BlockMessage.module.css';
// import { NavLink } from 'react-router-dom';
import MyMessage from './MyMessage/MyMessage';
import SendMessage from './MyMessage/SendMessage';

const RenderListMessage = (props) => {
    return (
        <div>
            <SendMessage state={props.state.dialogs}/>
            <MyMessage state={props.state} dispatch={props.dispatch} />
        </div>
        
    )
}

export default RenderListMessage;