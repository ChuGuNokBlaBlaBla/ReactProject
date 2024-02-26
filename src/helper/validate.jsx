import React from 'react'
import { useForm } from 'react-hook-form'
import { redirect } from 'react-router-dom'

export const AuthWebsite = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = (formData) => {
        props.logIn( formData.email, formData.password, formData.rememberMe)
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('email', { required: 'Поле email обязательно к заполнению' })} type='text' placeholder='email' name='email'></input>
                {errors?.login && <p>{errors.login.message}</p>}
            </div>
            <div>
                <input {...register('password', { required: 'Поле password обязательно к заполнению' })} type='text' placeholder='password' name='password'></input>
                {errors?.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <input {...register('rememberMe')} type='checkbox' placeholder='checkbox' name='rememberMe'></input>Remember me
            </div>
            <button>Log in</button>
        </form>
    )
}

export const ExitProfile = (props) => {

    const onSubmit = () => {
        props.exitProfile()
    }

    return (
        <div onClick={()=> onSubmit()} >
            <button>Выход</button>
        </div>
    )
}

export const ValidateMessage = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (formData) => {
        props.sendingForm(formData)
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register(`${props.fildName}`, { required: true })} type='text' name={props.fildName} ></input>
            <button>Отправить</button>
        </form>
    )

}