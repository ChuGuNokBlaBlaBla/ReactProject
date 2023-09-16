import React from 'react';
import Posts from './Post/Posts.jsx'
import s from './Posts.module.css'
import { useSelector } from 'react-redux';
import ContainerMyPosts from './SendPost/Container/ContainerSendPost.jsx';

const ContainerBlockPosts = (props) => {

    const dataSentPost = useSelector(state => state.profilePage.dataPosts)

    return [
        <div className={s.wrapMyPost}>
            <ContainerMyPosts />
            <Posts dataSentPost={dataSentPost} />
        </div>
    ]
}

export default ContainerBlockPosts;

