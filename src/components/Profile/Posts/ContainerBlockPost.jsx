import React from 'react';
import Posts from './Post/Posts.jsx'
import s from './Posts.module.css'
import ContainerMyPosts from './SendPost/Container/ContainerSendPost.jsx';
import { useSelector } from 'react-redux';

const ContainerBlockPosts = () => {
    const dataSentPost = useSelector(state => state.profileReducer.dataPosts)
    return (
        <div className={s.wrapMyPost}>
            <ContainerMyPosts />
            <Posts dataSentPost={dataSentPost} />
        </div>
    )
}

export default ContainerBlockPosts;

