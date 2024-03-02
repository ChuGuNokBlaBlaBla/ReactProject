import React from 'react';
import s from './ProfileBlock.module.css'
import MyDataProfile from './MyDataProfile';
import ContainerBlockPosts from './Posts/ContainerBlockPost';
import { changeEditMode, changeStatus, changeStatusMessage, getStatus, statusUpdate } from '../../redux/profileReducer';

export const BlockProfile = (props) => {
    
    const fieldProfile = {
        getStatus: getStatus,
        statusUpdate: statusUpdate,
        changeStatus: changeStatus,
        changeEditMode: changeEditMode,
        changeStatusMessage: changeStatusMessage
    }

    return (
        <div className={s.wrapContent}>
            <MyDataProfile fieldProfile={fieldProfile} dataUser={props.dataUser}
            />
            <ContainerBlockPosts />
        </div>
    )
}