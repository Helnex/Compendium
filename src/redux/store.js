import HomePageReducer from "./HomePageReducer"
import RegistrationPageReducer from "./RegistrationPageReducer"

let store = {
    _state: {
        HomePage: {
            newInputText: ''
        },
        RegistrationPage: {
            newEmailInputText: '',
            newPasswordInputText: '',
            newConfirmPasswordInputText: '',
        }
    },
    _callSubscriber() {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaa')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _updateNewInputText(newText) {
        this._state.HomePage.newInputText = newText
        this._callSubscriber(this._state)
    },
    _updatenewEmailInputText(newText) {
        this._state.RegistrationPage.newEmailInputText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        this._state.HomePage = HomePageReducer(this._state.HomePage, action)
        this._state.RegistrationPage = RegistrationPageReducer(this._state.RegistrationPage, action)
        this._callSubscriber(this._state)
    }
}

export default store


