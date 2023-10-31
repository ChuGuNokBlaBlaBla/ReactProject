import React from 'react';
import s from './ProfileBlock.module.css'
import MyDataProfile from './MyDataProfile';
import ContainerBlockPosts from './Posts/ContainerBlockPost';
import { changeEditMode, changeStatus, changeStatusMessage, getStatus, statusUpdate } from '../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state.profilePage.myData,
        status: state.profilePage.status,
        statusMessage: state.profilePage.statusMessage,
        editMode: state.profilePage.editMode
    }
}

const BlockProfile = (props) => {
    return (
        <div className={s.wrapContent}>
            <MyDataProfile state={props.state}
                changeStatus={props.changeStatus}
                getStatus={props.getStatus}
                statusUpdate={props.statusUpdate}
                status={props.status}
                editMode={props.editMode}
                changeEditMode={props.changeEditMode}
                statusMessage={props.statusMessage}
                changeStatusMessage={props.changeStatusMessage}
            />
            <ContainerBlockPosts />
        </div>
    )
}

export default connect(mapStateToProps, { changeStatus, getStatus, statusUpdate, changeEditMode, changeStatusMessage })(BlockProfile)

// export default BlockProfile;