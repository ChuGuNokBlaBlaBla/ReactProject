import React from 'react';
import s from './SendPost.module.css';

const SendPost = (props) => {
    return (
        <div className={s.sendPost}>
            <textarea
                type="text"
                onChange={props.changeValuePost}
                value={props.valuePost}
            />
            <button onClick={props.addPost}>Отправить</button>
        </div>
    )
}

export default SendPost;
