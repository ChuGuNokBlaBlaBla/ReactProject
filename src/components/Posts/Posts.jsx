import React from 'react';
import SendPost from './SendPost/SendPost.jsx';
import Post from './Post/Post.jsx'
import s from './Posts.module.css'

const Posts = () => {
    return (
        <div className={s.wrapMyPost}>
            <SendPost />
            <Post message='Привет, это мой первый пост'/>
            <Post message='Привет, это мой второй пост'/>
            <Post message='Привет, это мой третий пост'/>
        </div>
    );
}

export default Posts;

