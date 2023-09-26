import React from 'react';
import s from './SendPost.module.css';

const SendPost = (props) => {
    return (
        <div className={s.sendPost}>
            <textarea
                type="text"
                onChange={(e) => props.changeValuePost(e.target.value)}
                value={props.valuePost}
            />
            <button onClick={props.newPost}>Отправить</button>
        </div>
    )
}

export default SendPost;
