import React from 'react';
import styles from './AddTheme.module.scss'
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateNewText, onFileRef } from '../../redux/toolkitRedux/addThemeSlice';
import axios from '../../axios'
import { useNavigate, Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../redux/toolkitRedux/authSlice';
import { TextField } from '@mui/material';


const AddTheme = (props) => {
    const isAuth = useSelector(selectIsAuth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //const text = useSelector((state) => state.AddTheme.newText)
    const [text, setText] = useState('')
    // const imageUrl = useSelector((state) => state.AddTheme.fileRef) 
    const [imageUrl, setImageUrl] = useState('')
    const [title, setTitle] = useState('')
    const [isLoading, setLoading] = useState(false)
    const handleChangeFile = async (event) => {
        // dispatch(onFileRef(event.target.files))
        // const imageUrl = useSelector((state) => state.AddTheme.imageRef) 
        try {
            const formData = new FormData()
            const file = event.target.files[0]
            formData.append('image', file)
            const { data } = await axios.post('/api/upload', formData)
            console.log(data);
            setImageUrl(data.url)
        } catch (error) {
            console.log(error);
            alert('Ошибка при загрузке файла')
        }
    }
    const onClickRemoveImage = () => {
        setImageUrl('')
    }
    console.log({ title, text, imageUrl });
    const onSubmit = async () => {
        try {
            setLoading(true)

            const fields = {
                title,
                text,
                imageUrl
            }
            const { data } = await axios.post('/api/posts', fields)
            console.log(data);
            const id = data._id
            navigate(`/themes/${id}`)
        } catch (error) {
            console.warn(error)
            alert('Ошибка при создании статьи')
        }
    }

    const inputFileRef = useRef(null)
    if (!window.localStorage.getItem('token') && !isAuth) {
        return <Navigate to='/' />
    }
    return (
        <div>
            <button onClick={() => inputFileRef.current.click()}>Загрузить превью</button>
            <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
            {imageUrl && (
                <>
                    <button onClick={onClickRemoveImage}>удалить</button>
                    <img src={`http://localhost:5000${imageUrl}`} alt="Uploaded" />
                </>
            )}

            <br />
            <TextField
                value={title}
                onChange={e => setTitle(e.target.value)}
                classes={{ root: styles.title }}
                variant="standard"
                placeholder="Заголовок статьи..."
                fullWidth
            />
            <Editor
                apiKey='c1yo7oy1qkecge2xob3zkmfn2m93e1waauvn3dmop1o0mw4h'
                textareaName='content'
                //value={text}
                // onEditorChange={(newValue, editor) => {
                //     dispatch(updateNewText(editor.getContent({ format: 'text' })))
                // }}
                onEditorChange={(newValue, editor)=> {
                    console.log(editor.getContent({ format: 'text' }));
                    console.log(editor.getContent());
                    setText(editor.getContent())
                }}
            />
            <input onClick={onSubmit} type="submit" value='создать статью' />

        </div>
    );
};

export default AddTheme;