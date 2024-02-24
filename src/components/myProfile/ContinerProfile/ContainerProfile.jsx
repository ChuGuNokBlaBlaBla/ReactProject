import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthReducer';
import { compose } from 'redux';
import { changeEditMode, changeStatus, changeStatusMessage, getStatus, statusUpdate } from '../../../redux/profileReducer';
import MyDataProfile from '../MyDataProfile';
import ContainerBlockPosts from '../Posts/ContainerBlockPost';
import s from '../../myProfile/ProfileBlock.module.css'

const mapStateToProps = (state)=> {
    return{
        user: state.profilePage.myData,
        isAuth: state.auth.authMe
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
            <MyDataProfile fieldProfile={fieldProfile} dataUser={props.user}
            />
            <ContainerBlockPosts />
        </div>
    )
}

export default compose(
    connect(mapStateToProps, {getStatus, statusUpdate, changeEditMode, changeStatus, changeStatusMessage } ),
    withAuthRedirect
)
(ContainerProfile)