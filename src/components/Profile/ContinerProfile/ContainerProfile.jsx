import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthReducer';
import { compose } from 'redux';
import { changeEditMode, changeStatus, changeStatusMessage } from '../../../redux/authReducer';
import { getStatus, statusUpdate } from '../../../redux/authReducer';
import MyDataProfile from '../MyDataProfile';
import ContainerBlockPosts from '../Posts/ContainerBlockPost';
import s from '../../Profile/ProfileBlock.module.css'
import ContainerAuthMe from '../../Auth/AuthMe';

const mapStateToProps = (state) => {
    return {
        user: state.dataProfile.gettingMyProfileData,
        status: state.status.gettingMyProfileData.status,
        userId: state.userId.gettingMyProfileData.userId
    }
}

const ContainerProfile = (props) => {
    const fieldProfile = {
        getStatus: props.getStatus,
        statusUpdate: props.statusUpdate,
        changeStatus: props.changeStatus,
        changeEditMode: props.changeEditMode,
        changeStatusMessage: props.changeStatusMessage
    }

    return (
            // <div className={s.wrapContent}>
            //     <MyDataProfile fieldProfile={fieldProfile} dataUser={props.user} status={props.status} userId={props.userId} />
            //     <ContainerBlockPosts />
            // </div>
            !props.dataUser === null || !props.dataUser === undefined ?
            <ContainerAuthMe /> :
            <div className={s.wrapContent}>
                <MyDataProfile fieldProfile={fieldProfile} dataUser={props.user} status={props.status} userId={props.userId} />
                <ContainerBlockPosts />
            </div>
    )
}

export default compose(
    connect(mapStateToProps, { getStatus, statusUpdate, changeStatus, changeEditMode, changeStatusMessage }),
    withAuthRedirect
)
    (ContainerProfile)