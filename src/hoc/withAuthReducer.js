import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.authMe
    }
}

export const withAuthRedirect = (Component) => {
    const ContainerAuthProcess = (props) => {
        if (!props.isAuth) { return <Navigate to='/login/' /> }
        return <Component {...props} />
    }
    const ConnectComponent = connect(mapStateToProps)(ContainerAuthProcess)
    return ConnectComponent
}