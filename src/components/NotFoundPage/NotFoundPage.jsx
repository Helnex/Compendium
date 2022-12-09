import React from 'react';
import styles from './NotFoundPage.module.scss'

const NotFoundPage = (props) => {
    return (
        <div>
            Not found page
            <div id='testt'className={styles.text1}>text1</div>
            <div id='test' className={styles.text2}>text2</div>
        </div>
    );
};

export default NotFoundPage;