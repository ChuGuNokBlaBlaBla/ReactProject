import React from "react";

class ChatImput extends React.Component{
    render(){
        return (
            <div>
                <textarea type='text'
                    onChange={this.props.changeMyMessage}
                    value={this.props.valueMessage}
                />
                 <button onClick={this.props.sentMessage}>Отправить</button>
            </div>
        )
    }
}

export default ChatImput;