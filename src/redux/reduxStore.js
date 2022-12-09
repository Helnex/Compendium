import { combineReducers, legacy_createStore as createStore } from "redux"
import HomePageReducer from "./HomePageReducer"
import RegistrationPageReducer from "./RegistrationPageReducer"

let reducers = combineReducers({
    HomePage: HomePageReducer, 
    RegistrationPage: RegistrationPageReducer,
})
let store = createStore(reducers)

window.store = store

export default store