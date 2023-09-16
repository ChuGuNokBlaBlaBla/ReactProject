import React from 'react';
import s from './ProfileBlock.module.css'
import ContainerProfile from './ContainerProfile';

const BlockProfile = (props) => {
    return (
        <div className={s.wrapContent}>
            <ContainerProfile />
        </div>
    )
}

export default BlockProfile;