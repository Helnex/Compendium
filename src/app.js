import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styles from './styles.module.scss';

const App = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App