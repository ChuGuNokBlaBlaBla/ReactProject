import React from "react";
import { AuthWebsite, ExitProfile } from "../../helper/validate";
import { connect } from "react-redux";
import { exitProfile, logIn } from "../../redux/authReducer";

const mapStateToProps = (state) => {
    return {
        authMe: state.auth.authMe
    }
}

const LoginNetwork = (props) => {
    return (!props.authMe ? <div>
        <AuthWebsite logIn={props.logIn} />
    </div> : <div>
        <ExitProfile exitProfile={props.exitProfile} />
    </div>)
}

const ContainerAuthMe = connect(mapStateToProps, { logIn, exitProfile })(LoginNetwork);
export default ContainerAuthMe