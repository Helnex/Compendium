import React  from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../../redux/toolkitRedux/postsSlice';

const FullTheme = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPost(id))
    }, [])
    const { posts } = useSelector(state => state.posts)
    document.title = posts.items.title
    
    return (
        <div>
            <div className="" dangerouslySetInnerHTML={{__html: posts.items.text}}></div>
        </div>
    )
};

export { FullTheme };