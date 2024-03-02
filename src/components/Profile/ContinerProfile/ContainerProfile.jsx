import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthReducer';
import { compose } from 'redux';
import { changeEditMode, changeStatus, changeStatusMessage } from '../../../redux/profileReducer';
import { getStatus, statusUpdate } from '../../../redux/authReducer';
import MyDataProfile from '../MyDataProfile';
import ContainerBlockPosts from '../Posts/ContainerBlockPost';
import s from '../../Profile/ProfileBlock.module.css'

const mapStateToProps = (state)=> {
    return{
        user: state.dataProfile.profilePage,
        isAuth: state.auth.authMe,
        status: state.dataProfile.status
    }
}

const ContainerProfile = (props)=> {

    const fieldProfile = {
        getStatus: props.getStatus,
        statusUpdate: props.statusUpdate,
        changeStatus: props.changeStatus,
        changeEditMode: props.changeEditMode,
        changeStatusMessage: props.changeStatusMessage
    }
    
    return (
        <div className={s.wrapContent}>
            <MyDataProfile fieldProfile={fieldProfile} dataUser={props.user} status={props.status} />
            <ContainerBlockPosts />
        </div>
    )
}

export default compose(
    connect(mapStateToProps, { getStatus, statusUpdate, changeEditMode, changeStatus, changeStatusMessage } ),
    withAuthRedirect
)
(ContainerProfile)