import React from 'react';
import axios from '../../axios'
import styles from './ThemesPage.module.scss'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/toolkitRedux/postsSlice';
import PostSkeleton from '../FullTheme/Skeleton';
import Theme from './Theme/Theme';
import { useEffect } from 'react';

const ThemesPage = () => {

    const dispatch = useDispatch()
    const userData = useSelector((state) => state.auth.data)
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    const { posts } = useSelector(state => state.posts)
    console.log(posts);

    const isPostLoading = posts.status === 'loading';
    return (
        <div className={styles.container}>
            {(isPostLoading ? [...Array(5)] : posts.items).map((obj, index) => 
                isPostLoading ? (
                    <Theme key={index} isPostLoading={true} />
                ) : (
                    <Theme 
                    key={index}
                    id = {obj._id}
                    title = {obj.title}
                    author = {obj.user}
                    isEditable = {userData?._id == obj.user._id}
                    imageUrl = 'https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg'
                    />
                )
            )}
            {/* <Theme isPostLoading = {isPostLoading}/> */}

            {/* <section className={styles.container__section}>
                    <h2>item1</h2>
                    <ul> 
                        {posts.items.map(function (item) {
                            return (
                                <li key={item._id}>
                                    <Link to={`/themes/${item._id}`}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </section> */}
        </div>
    );
};

export default ThemesPage;