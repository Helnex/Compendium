import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    newInputText: ''
}

const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        updateNewInputText: (state, action) => {
            console.log(state);
            console.log(action);
            state.newInputText = action.payload
            console.log(action.payload);
        },
    },
})
export const { updateNewInputText } = homePageSlice.actions
export default homePageSlice.reducer