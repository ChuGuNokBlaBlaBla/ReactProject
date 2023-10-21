import React from 'react';
import { connect } from 'react-redux';
import BlockProfile from '../ProfileBlock';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthReducer';

const mapStateToProps = (state)=> {
    return{
        user: state.profilePage.myData,
        isAuth: state.auth.authMe
    }
}

const ContainerProfile = (props)=> {
    return <BlockProfile state={props.user}/>
}

let ContainerConnectComponentProfile = withAuthRedirect(ContainerProfile)

// const CreateComponentProfile = (props)=> {
//     if(!props.isAuth){ return <Navigate to='/login/' /> }
//     return <ContainerProfile {...props} />
// }

export default connect(mapStateToProps, {} )(ContainerConnectComponentProfile)