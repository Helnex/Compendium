import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postsReducer } from "./postsSlice";
import homePageSlice from "./homePageSlice";
import addThemeSlice from './addThemeSlice'
import { authReducer } from "./authSlice";
import loginPageSlice from "./loginPageSlice";
// const rootReducer = combineReducers({
//     HomePage: homePageReducer
// })

const store = configureStore({
    reducer: {
        posts: postsReducer,
        HomePage: homePageSlice,
        AddTheme: addThemeSlice,
        auth: authReducer,
        loginPage: loginPageSlice
    },
})
export default store