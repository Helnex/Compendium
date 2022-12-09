import React from 'react';
import styles from './HomePage.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateNewInputText } from '../../redux/toolkitRedux/homePageSlice';
const HomePage = (props) => {
    const state = useSelector(state => state.HomePage)
    const dispatch = useDispatch()
    let newInputText = state.newInputText

    let onInputTextChange = (e) => {
        let body = e.target.value
        console.log(body)
        dispatch(updateNewInputText(body))
    }
    
    return (
        <div className={styles.container}>
            <section className={styles.container__section}>
                <h2 className={styles.title}>
                    {/* Поиск по всем темам */} search input
                </h2>
                <form action="" method="get" className={styles.search}>
                    <input value={newInputText} onChange={onInputTextChange} name="search" placeholder="Начните вводить для поиска..." type="text" className={styles.searchInput} />
                    <button type="submit" className={styles.searchButton}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
                    </button>
                </form>
            </section>
            <section className={styles.container__section}>
                <article className={styles.article}>
                    {/* Справочник от Math compendium – это возможность для ученика систематизировать свои знания перед контрольной работой или выделить из параграфа самую важную информацию, не распыляясь на малозначащие нюансы. Справочный материал дается в качестве уроков.На странице представлены справочники по всем школьным предметам с 1 по 11 класс. Они написаны понятным языком и дополнены примерами. Ключевые моменты обведены в рамочку для лучшего запоминания, а таблицы облегчают визуальное восприятие сложного текста.Такое пособие поможет школьнику получить высокую оценку, завоевать уважение учителя и успешно окончить школу. */}
                    home page text
                </article>
            </section>
        </div>
    );
};

export default HomePage;