import React, { useEffect } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { myLogin } from '../../redux/authReducer';

const mapStateToProps = (state) => {
    return {
        authMe: state.auth.authMe,
        userId: state.userId.userId
    }
}
const HeaderContainer = (props) => {

    useEffect(() => {
        props.myLogin()
    }, [])

    return <Header authMe={props.authMe} />
}

export default connect(mapStateToProps, { myLogin })(HeaderContainer);