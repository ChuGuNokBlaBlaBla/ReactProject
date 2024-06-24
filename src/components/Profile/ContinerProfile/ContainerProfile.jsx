import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthReducer';
import { compose } from 'redux';
import { changeEditMode, changeStatus, changeStatusMessage } from '../../../redux/profileReducer';
import { getStatus, statusUpdate } from '../../../redux/authReducer';
import MyDataProfile from '../MyDataProfile';
import ContainerBlockPosts from '../Posts/ContainerBlockPost';
import s from '../../Profile/ProfileBlock.module.css'
import { getUser, getUserId, getStatusProfile } from '../../../Selectors/selectorProfile';

const mapStateToProps = (state)=> {
    return{
        user: getUser(state),
        status: getStatusProfile(state),
        userId: getUserId(state)
    }
}

const ContainerProfile = (props)=> {

    useEffect(() => {
        fieldProfile.getStatus(props.userId)
    }, [])

    const fieldProfile = {
        user: props.user,
        status: props.status,
        userId: props.userId,
        getStatus: props.getStatus,
        statusUpdate: props.statusUpdate,
        changeStatus: props.changeStatus,
        changeEditMode: props.changeEditMode,
        changeStatusMessage: props.changeStatusMessage
    }
    
    return (
        <div className={s.wrapContent}>
            <MyDataProfile fieldProfile={fieldProfile} dataUser={props.user} status={props.status} userId={props.userId}/>
            <ContainerBlockPosts />
        </div>
    )
}

export default compose(
    connect(mapStateToProps, { getStatus, statusUpdate, changeEditMode, changeStatus, changeStatusMessage } ),
    withAuthRedirect
)
(ContainerProfile)