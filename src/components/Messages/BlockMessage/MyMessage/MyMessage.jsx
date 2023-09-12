import React from 'react';

const MyMessage = (props) => {

    let makeLink = React.createRef()

    let changeMyMessage = () => {
        let message = makeLink.current.value
        props.dispatch(props.changeText(message))
    }

    let sentMessage = () =>{
        let message = makeLink.current.value
        props.dispatch(props.newMessage(message))
    }

    return (
        <div>
            <textarea type='text'
                ref={makeLink}
                onChange={changeMyMessage}
                value={props.valueMessage}
            />
             <button onClick={sentMessage}>Отправить</button>
        </div>
    )
}

export default MyMessage