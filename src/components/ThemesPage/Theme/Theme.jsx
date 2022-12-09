import React from 'react';
import PostSkeleton from '../../FullTheme/Skeleton';
import styles from './Theme.module.scss'
import userIcon from '../../../assets/images/user.svg'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
const Theme = (props) => {
    if (props.isPostLoading) {
        return <PostSkeleton />;
    }
    const onClickRemove = () => {

    }
    return (
        <section className={styles.preview}>
            {props.isEditable && (
                <div className={styles.editButtons}>
                    <a href={`/posts/${props.id}/edit`}>
                        <IconButton color="primary">
                            <EditIcon />
                        </IconButton>
                    </a>
                    <IconButton onClick={onClickRemove} color="secondary">
                        <DeleteIcon />
                    </IconButton>
                </div>
            )}
            <a href={`/themes/${props.id}`}>
                <img className={styles.preview__image} src={props.imageUrl} />
            </a>
            <div className={styles.preview__content}>
                <div className={styles.content__author}>
                    <img src={userIcon} />
                    <div>
                        {/* <span className= {styles.author__fullname}>{props.author.fullName}</span> */}
                        <span className={styles.author__fullname}>fullname</span>
                        <span className={styles.author__date}>12 jun 2022</span>
                    </div>
                </div>
                <h3 className={styles.content__title}>{props.title}</h3>
            </div>
        </section>
    )

};
export default Theme