import React from "react";
import { AuthWebsite, ExitProfile } from "../../helper/validate";
import { connect } from "react-redux";
import { exitProfile, logIn } from "../../redux/authReducer";

const mapStateToProps = (state) => {
    return {
        authMe: state.authReducer.authMe,
        errorMessages: state.authReducer.errorMessages
    }
}

const LoginNetwork = (props) => {
    return (!props.authMe ? <div>
        <AuthWebsite logIn={props.logIn} errorMessages={props.errorMessages} />
    </div> : <div>
        <ExitProfile exitProfile={props.exitProfile} />
    </div>)
}

const ContainerAuthMe = connect(mapStateToProps, { logIn, exitProfile })(LoginNetwork);
export default ContainerAuthMe