import React, { useEffect } from 'react';
import styles from './Main.module.scss'
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ThemesPage from '../ThemesPage/ThemesPage';
import { FullTheme } from '../FullTheme/FullTheme';
import AddTheme from '../AddTheme/AddTheme';
import HomePage from '../HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from '../../redux/toolkitRedux/authSlice';
import RegistrationPage from '../RegistrationPage/RegistrationPage';



const Main = (props) => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    useEffect(() => {
        dispatch(fetchAuthMe())
    },[])
    return (
        <main className={styles.main}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/themes' element={<ThemesPage />} />
                <Route path='/themes/create' element={<AddTheme />} />
                <Route path='/themes/:id' element={<FullTheme />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/registration' element={<RegistrationPage />} />
                <Route path='/*' element={<NotFoundPage />} />
            </Routes>
        </main>
    );
};

export default Main;