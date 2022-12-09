import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newEmailInputText: '',
    newPasswordInputText: '',
    newConfirmPasswordInputText: '',
}

const RegistrationPageSlice = createSlice({
    name: 'RegistrationPage',
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
        updateNewConfirmPasswordInputText: (state, action) => {
            console.log(state);
            console.log(action);
            state.newConfirmPasswordInputText = action.payload
            console.log(action.payload);
        },
    },
})
export const { updateNewEmailInputText, updateNewPasswordInputText, updateNewConfirmPasswordInputText } = RegistrationPageSlice.actions
export default RegistrationPageSlice.reducer