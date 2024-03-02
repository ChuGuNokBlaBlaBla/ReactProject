import React from 'react';
import { ValidateMessage } from '../../../../helper/validate';

const SendPost = (props) => {
    return (
        <ValidateMessage fildName={'mySentPost'} sendingForm={props.newPost} />
    )
}

export default SendPost;
