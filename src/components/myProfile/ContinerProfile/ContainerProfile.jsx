import React from 'react';
import { connect } from 'react-redux';
import BlockProfile from '../ProfileBlock';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthReducer';
import { compose } from 'redux';

const mapStateToProps = (state)=> {
    return{
        user: state.profilePage.myData,
        isAuth: state.auth.authMe
    }
}

const ContainerProfile = (props)=> {
    return <BlockProfile state={props.user}/>
}

export default compose(
    connect(mapStateToProps, {} ),
    withAuthRedirect
)
(ContainerProfile)