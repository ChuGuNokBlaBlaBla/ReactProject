import React from 'react';
import Posts from './Post/Posts.jsx'
import s from './Posts.module.css'
import ContainerMyPosts from './SendPost/Container/ContainerSendPost.jsx';
import { connect, useSelector } from 'react-redux';
import { getDataSentPost } from '../../../Selectors/selectorProfile.js';

const mapStateToProps = (state) => {
    return {
        dataSentPost: getDataSentPost(state)
    }
}

const ContainerBlockPosts = (props) => {
    const dataSentPost = useSelector(state => state.profileReducer.dataPosts)
    return (
        <div className={s.wrapMyPost}>
            <ContainerMyPosts />
            <Posts dataSentPost={props.dataSentPost} />
        </div>
    )
}

export default connect(mapStateToProps, {}) (ContainerBlockPosts);

