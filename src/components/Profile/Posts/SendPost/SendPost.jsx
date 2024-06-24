import React, { useState } from 'react';
import { ValidateMessage } from '../../../../helper/validate';
import { connect } from 'react-redux';
import { newPost } from '../../../../redux/profileReducer';
import { getFildName } from '../../../../Selectors/selectorProfile';
import { useForm } from 'react-hook-form';

// const SendPost = (props) => {
//     return (
//         <ValidateMessage fildName={'mySentPost'} sendingForm={props.newPost} />
//     )
// }

const mapStateToProps = (state)=> {
    return {
        fildName: getFildName(state)
    }
}

const SendPost = (props) => {

    const [valuePost, setvaluePost] = useState()

    const { register, handleSubmit } = useForm()

    const onSubmit = (formData) => {
        props.newPost(formData)
        setvaluePost('')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register(`${props.fildName}`, { required: true })}
                type='text'
                name={props.fildName}
                onChange={(e) => setvaluePost(e.target.value)}
                value={valuePost}
            >
            </input>

            <button>Отправить</button>
        </form>
    )
}

export default connect(mapStateToProps, {newPost}) (SendPost);
