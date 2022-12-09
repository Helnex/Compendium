const UPDATE_NEW_EMAIL_INPUT_TEXT = 'UPDATE-NEW-EMAIL-INPUT-TEXT'
const UPDATE_NEW_PASSWORD_INPUT_TEXT = 'UPDATE-NEW-PASSWORD-INPUT-TEXT'
const UPDATE_NEW_CONFIRM_PASSWORD_INPUT_TEXT = 'UPDATE-NEW-CONFIRM-PASSWORD-INPUT-TEXT'


let initialState = {
    newEmailInputText: '',
    newPasswordInputText: '',
    newConfirmPasswordInputText: ''
}

export const RegistrationPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_EMAIL_INPUT_TEXT: {
            return {
                ...state,
                newEmailInputText: action.body
            }
        }
        case UPDATE_NEW_PASSWORD_INPUT_TEXT: {
            return {
                ...state,
                newPasswordInputText: action.body
            }
        }
        case UPDATE_NEW_CONFIRM_PASSWORD_INPUT_TEXT: {
            return {
                ...state,
                newConfirmPasswordInputText: action.body
            }
        }
        default: {
            return state
        }
    }
}

export const updateNewEmailInputTextCreator = (body) => {
    return {
        type: UPDATE_NEW_EMAIL_INPUT_TEXT, body: body,
    }
}
export const updateNewPasswordInputTextCreator = (body) => {
    debugger
    return {
        type: UPDATE_NEW_PASSWORD_INPUT_TEXT, body: body,
    }
}
export const updateNewConfirmPasswordInputTextCreator = (body) => {
    return {
        type: UPDATE_NEW_CONFIRM_PASSWORD_INPUT_TEXT, body: body
    }
}
export default RegistrationPageReducer