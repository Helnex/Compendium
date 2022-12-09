import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
    newText: '',
    fileRef: ''
}
const addThemeSlice = createSlice({
    name: 'addThemeSlice',
    initialState,
    reducers: {
        updateNewText: (state, action) => {
            state.newText = action.payload
            // console.log(action.payload);
        },
        onFileRef: (state, action) => {
            state.fileRef = action.payload
            
            // console.log(action);
            // console.log(action.payload);
            // console.log(`вот стейт   ${state.fileRef}`);
        }
    }
})
export const { updateNewText, onFileRef } = addThemeSlice.actions
export default addThemeSlice.reducer