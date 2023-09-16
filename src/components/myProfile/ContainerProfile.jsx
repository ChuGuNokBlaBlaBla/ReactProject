import React from 'react';
import MyDataProfile from './MyDataProfile';
import ContainerBlockPosts from '../Posts/ContainerBlockPost';

const ContainerProfile = (props)=> {
    return (
        <div>
            <MyDataProfile />
            <ContainerBlockPosts />
        </div>
    )
}

export default ContainerProfile;