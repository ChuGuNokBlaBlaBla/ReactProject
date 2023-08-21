import React from 'react';
import SendPost from './SendPost/SendPost.jsx';
import Post from './Post/Post.jsx'
import s from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={s.wrapMyPost}>
            <SendPost state={props.state} addPost={props.addPost} changeTextPost={props.changeTextPost} />
            <Post state={props.state.profilePage} />
        </div>
    );
}

export default Posts;

