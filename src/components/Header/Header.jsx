import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout, selectIsAuth } from '../../redux/toolkitRedux/authSlice';
import styles from './Header.module.scss'

const Header = (props) => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const onClickLogout = () => {
        if(window.confirm('Выйти из аккаунта?')) {
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
    }
    return (
        <header>
            <nav className={styles.menu}>
                <ul className={styles.header__section}>
                    <li className={styles.header__item + ' ' + styles.headerlogo}><NavLink to='/'>Hedaer logo</NavLink></li>
                </ul>
                <ul className={styles.header__section}>
                    <li className={styles.header__item + ' ' + styles.headerlink}>
                        {/* <NavLink to='/themes' >item1</NavLink> */}
                        <a href="/themes">item1</a>
                    </li>
                </ul>
                <ul className={styles.header__section}>
                    {isAuth ? (
                        <>
                            <li className={styles.header__item + ' ' + styles.login}><NavLink to='/themes/create'>Создать статью </NavLink></li>
                            <li className={styles.header__item}>
                                <button onClick={onClickLogout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={styles.header__item + ' ' + styles.login}><NavLink to='/login'>Login</NavLink></li>
                            <li className={styles.header__item + ' ' + styles.register}><NavLink to='/registration'>Register</NavLink></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;