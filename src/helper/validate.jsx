import React from 'react'
import { useForm } from 'react-hook-form'

export const AuthWebsite = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('login', { required: 'Поле login обязательно к заполнению' })} type='text' placeholder='Login' name='login'></input>
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