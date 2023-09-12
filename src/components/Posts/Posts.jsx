import React from 'react';
import SendPost from './SendPost/SendPost.jsx';
import Post from './Post/Post.jsx'
import s from './Posts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeText, newPost } from '../../redux/profileReducer.js';

const ContPosts = (props) => {

    const dispatch = useDispatch(),
        valuePost = useSelector(state => state.profilePage.valueTextPost),
        dataSentPost = useSelector(state => state.profilePage.dataPosts)

    return (
        <div className={s.wrapMyPost}>
            <SendPost state={props.state} 
                changeText={changeText}
                newPost={newPost}
                dispatch={dispatch}
                valuePost={valuePost}
            />
            <Post dataSentPost={dataSentPost} />
        </div>
    );
}

export default ContPosts;

