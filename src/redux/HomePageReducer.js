const UPDATE_NEW_INPUT_TEXT = 'UPDATE-NEW-INPUT-TEXT'


let initialState = {
    newInputText: ''
}

export const HomePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_INPUT_TEXT: {
            return {
                ...state,
                newInputText: action.body
            }
        }
        default: {
            return state
        }
    }
}

export const updateNewInputTextCreator = (body) => {
    return {
        type: UPDATE_NEW_INPUT_TEXT, body: body
    }
}
export default HomePageReducer