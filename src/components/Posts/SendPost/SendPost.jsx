import React from 'react';
import s from './SendPost.module.css';

const SendPost = ()=> {
    return(
        <div className={s.sendPost}>
            <input type="text" />
            <button>Отправить</button>
        </div>
    )
}

export default SendPost;
