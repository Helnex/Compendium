import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNewEmailInputText, updateNewPasswordInputText } from '../../redux/toolkitRedux/loginPageSlice';
import { useForm } from 'react-hook-form'
import styles from './LoginPage.module.scss'
import TextField from "@mui/material/TextField";
import { fetchAuth, selectIsAuth } from '../../redux/toolkitRedux/authSlice';
import { Navigate } from 'react-router-dom';
const LoginPage = () => {
    const isAuth = useSelector(selectIsAuth)
    const state = useSelector(state => state.loginPage)
    const dispatch = useDispatch()
    const newEmailInputText = state.newEmailInputText
    const newPasswordInputText = state.newPasswordInputText

    const onEmailInputTextChange = (e) => {
        const body = e.target.value
        console.log(body)
        dispatch(updateNewEmailInputText(body))
    }
    const onPasswordInputTextChange = (e) => {
        const body = e.target.value
        console.log(body)
        dispatch(updateNewPasswordInputText(body))
    }

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        //здесь баг при логине
        mode: 'onChange'
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values))
        if (!data.payload) {
            return alert('Не удалось авторизоваться')
        }
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        }
    }

    if (isAuth) {
        return <Navigate to='/' />
    }
    return (
        <section className={styles.main__section}>
            <form method="post" onSubmit={handleSubmit(onSubmit)} className={styles.registration}>
                <div className={styles.input__container}>
                    <h2>CREATE YOUR ACCOUNT</h2>
                </div>
                <TextField
                    className={styles.registration__input}
                    value={newEmailInputText}
                    {...register('email', { required: 'Укажите email' })}
                    onChange={onEmailInputTextChange}
                    label="E-Mail"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    fullWidth
                    type='email'
                />
                <TextField
                    className={styles.registration__input}
                    label="Пароль"
                    fullWidth
                    value={newPasswordInputText}
                    {...register('password', { required: 'Укажите пароль' })}
                    onChange={onPasswordInputTextChange}
                    helperText={errors.password?.message}
                    error={Boolean(errors.password?.message)}
                    type='password'
                />

                <div className={styles.input__container}>
                    <button type="submit" className={styles.registration__button}>
                        Next
                    </button>
                </div>
            </form>
        </section>
    );
};

export default LoginPage;