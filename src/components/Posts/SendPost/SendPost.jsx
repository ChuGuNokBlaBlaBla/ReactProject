import React from 'react';
import s from './SendPost.module.css';

const SendPost = (props) => {

    let makeLink = React.createRef();
    
    let addPost = () => {
        let textPost = makeLink.current.value
        props.dispatch(props.newPost(textPost))
    }

    let changeValuePost = () => {
        let textPost = makeLink.current.value
        props.dispatch(props.changeText(textPost))
    }

    return (
        <div className={s.sendPost}>
            <textarea 
            type="text"
                ref={makeLink}
                onChange={changeValuePost}
                value={props.valuePost}
            />
            <button onClick={addPost}>Отправить</button>
        </div>
    )
}

export default SendPost;
