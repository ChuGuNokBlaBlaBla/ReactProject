import React from "react";

const ChatImput = (props) => {
    return (
        <div>
            <textarea type='text'
                onChange={(e)=> props.changeText(e.target.value)}
                value={props.valueMessage}
            />
            <button onClick={props.newMessage}>Отправить</button>
        </div>
    )
}

export default ChatImput;