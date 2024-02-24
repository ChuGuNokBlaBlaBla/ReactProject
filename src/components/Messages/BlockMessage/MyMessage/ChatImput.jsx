import React from "react";
import { ValidateMessage } from "../../../../helper/validate";

const ChatImput = (props) => {
    return (
        <ValidateMessage fildName={'message'} sendingForm={props.newMessage} />
    )
}

export default ChatImput;