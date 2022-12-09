import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './RegistrationPage.module.scss'
import { updateNewEmailInputText, updateNewPasswordInputText, updateNewFullnameInputText } from '../../redux/toolkitRedux/loginPageSlice';
import { useForm } from 'react-hook-form';
import { fetchRegister, selectIsAuth } from '../../redux/toolkitRedux/authSlice';
import { TextField } from '@mui/material';
import { Navigate } from 'react-router-dom';
const RegistrationPage = () => {
    const isAuth = useSelector(selectIsAuth)
    const state = useSelector(state => state.loginPage)
    const dispatch = useDispatch()
    const newFullnameInputText = state.newConfirmPasswordInputText
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
    const onFullnameInputTextChange = (e) => {
        const body = e.target.value
        console.log(body)
        dispatch(updateNewFullnameInputText(body))
    }

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: {
            newFullnameInputText: '',
            newEmailInputText: '', 
            newPasswordInputText: ''
        },
        //здесь баг при логине
        mode: 'onChange'
    })
    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values))
        if (!data.payload) {
            return alert('Не удалось зарегестрироваться')
        }
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
            dispatch(updateNewPasswordInputText(''))
            dispatch(updateNewEmailInputText(''))
            dispatch(updateNewFullnameInputText(''))
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
                    value={newFullnameInputText}
                    {...register('fullName', { required: 'Укажите имя' })}
                    onChange={onFullnameInputTextChange}
                    label="Имя"
                    error={Boolean(errors.fullname?.message)}
                    helperText={errors.fullname?.message}
                    fullWidth
                />
                <TextField
                    className={styles.registration__input}
                    label="E-Mail"
                    fullWidth
                    value={newEmailInputText}
                    {...register('email', { required: 'Укажите email' })}
                    onChange={onEmailInputTextChange}
                    helperText={errors.email?.message}
                    error={Boolean(errors.email?.message)}
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
                    <button  type="submit" className={styles.registration__button}>
                        Next
                    </button>
                </div>
            </form>
        </section>
    );
};

export default RegistrationPage;