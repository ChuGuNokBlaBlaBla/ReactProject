import React from 'react';
import s from './SendPost.module.css';

const SendPost = (props) => {

    let makeLink = React.createRef();

    let addPost = () => {
        
        let textAdd = makeLink.current.value
        props.addPost(textAdd)
        debugger
    }

    return (
        <div className={s.sendPost}>
            <input type="text" ref={makeLink} />
            <button onClick={addPost}>Отправить</button>
        </div>
    )
}

export default SendPost;
