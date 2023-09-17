import React from "react";

const BlockMyMessage = (props) => {
    return (
        <div>
            <textarea type='text'
                onChange={props.changeMyMessage}
                value={props.valueMessage}
            />
             <button onClick={props.sentMessage}>Отправить</button>
        </div>
    )
}

export default BlockMyMessage;