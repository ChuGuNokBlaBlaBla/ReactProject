import React from 'react';
import { connect } from 'react-redux';
import BlockProfile from '../ProfileBlock';

const mapStateToProps = (state)=> {
    return{
        user: state.profilePage.myData
    }
}

const ContainerProfile = (props)=> {
    return(
        <BlockProfile state={props.user}/>
    )
}

export default connect(mapStateToProps, {} )(ContainerProfile)