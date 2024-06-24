import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { newMessage } from "../../../../redux/dialogsReducer";
import { getFildName } from "../../../../Selectors/selectorDialogs";

const mapStateToProps = (state)=> {
    return {
        fildName: getFildName(state)
    }
}

const ChatImput = (props) => {

    const [message, setMessage] = useState()

    const { register, handleSubmit } = useForm()

    const onSubmit = (formData) => {
        props.newMessage(formData)
        setMessage('')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register(`${props.fildName}`, { required: true })}
                type='text'
                name={props.fildName}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            >
            </input>

            <button>Отправить</button>
        </form>
    )
}

export default connect(mapStateToProps, { newMessage })(ChatImput);