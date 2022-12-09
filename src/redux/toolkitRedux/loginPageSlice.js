import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
    newEmailInputText: '',
    newPasswordInputText: '',
    newFullnameInputText: '',
}

const loginPageSlice = createSlice({
    name: 'loginPage',
    initialState,
    reducers: {
        updateNewEmailInputText: (state, action) => {
            console.log(state);
            console.log(action);
            state.newEmailInputText = action.payload
            console.log(action.payload);
        },
        updateNewPasswordInputText: (state, action) => {
            console.log(state);
            console.log(action);
            state.newPasswordInputText = action.payload
            console.log(action.payload);
        },
        updateNewFullnameInputText: (state, action) => {
            console.log(state);
            console.log(action);
            state.newFullnameInputText = action.payload
            console.log(action.payload);
        },
    },
})
export const { updateNewEmailInputText, updateNewPasswordInputText, updateNewFullnameInputText } = loginPageSlice.actions
export default loginPageSlice.reducer