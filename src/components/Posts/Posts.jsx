import React from 'react';
import SendPost from './SendPost/SendPost.jsx';
import Post from './Post/Post.jsx'
import s from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={s.wrapMyPost}>
            <SendPost addPost={props.addPost} />
            <Post state={props.state} />
        </div>
    );
}

export default Posts;

