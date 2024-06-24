import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styleValidate from './Validate.module.css'

export const AuthWebsite = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('email', { required: 'Поле email обязательно к заполнению' })} type='text' placeholder='email' name='email'></input>
                {errors?.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <input {...register('password', { required: 'Поле password обязательно к заполнению' })} type='text' placeholder='password' name='password'></input>
                {errors?.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <input {...register('rememberMe')} type='checkbox' placeholder='checkbox' name='rememberMe'></input>Remember me
            </div>
            <div className={props.errorMessages.length ? styleValidate.errosActive : styleValidate.errorsNone}>{props.errorMessages}</div>
            <button>Log in</button>
        </form>
    )
}

export const ExitProfile = (props) => {

    const onSubmit = () => {
        props.exitProfile()
    }

    return (
        <div onClick={() => onSubmit()} >
            <button>Выход</button>
        </div>
    )
}

export const ValidateMessage = (props) => {
    const [message, setMessage] = useState()

    const { register, handleSubmit } = useForm()

    const onSubmit = (formData) => {
        props.sendingForm(formData)
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