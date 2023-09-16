import React from 'react';
import SendPost from './SendPost/SendPost.jsx';
import Posts from './Post/Posts.jsx'
import s from './Posts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeText, newPost } from '../../redux/profileReducer.js';

const ContainerBlockPosts = (props) => {

    const dispatch = useDispatch(),
        valuePost = useSelector(state => state.profilePage.valueTextPost),
        dataSentPost = useSelector(state => state.profilePage.dataPosts)

    let addPost = () => {
        let textPost = valuePost;
        dispatch(newPost(textPost));
    }

    let changeValuePost = (e) => {
        let textPost = e.target.value;
        dispatch(changeText(textPost));
    }

    return (
        <div className={s.wrapMyPost}>
            <SendPost
                valuePost={valuePost}
                addPost={addPost}
                changeValuePost={changeValuePost}
            />
            <Posts dataSentPost={dataSentPost} />
        </div>
    );
}

export default ContainerBlockPosts;

