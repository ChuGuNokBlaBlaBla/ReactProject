import React from 'react';

const MyMessage = (props) => {

    let makeLink = React.createRef()

    let changeMyMessage = () => {
        let message = makeLink.current.value
        props.dispatch({type: 'MY-MESSAGE', myMessage: message})
    }

    let sentMessage = () =>{
        let message = makeLink.current.value
        props.dispatch({type: 'SENT-MESSAGE', myMessage: message})
    }

    return (
        <div>
            <textarea type='text'
                ref={makeLink}
                onChange={changeMyMessage}
                value={props.state.dataMessage}
            />
             <button onClick={sentMessage}>Отправить</button>
        </div>
    )
}

export default MyMessage