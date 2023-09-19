import React from 'react';
import s from './ProfileBlock.module.css'
import MyDataProfile from './MyDataProfile';
import ContainerBlockPosts from '../Posts/ContainerBlockPost';

const BlockProfile = (props) => {
    return (
        <div className={s.wrapContent}>
            <MyDataProfile />
            <ContainerBlockPosts />
        </div>
    )
}

export default BlockProfile;