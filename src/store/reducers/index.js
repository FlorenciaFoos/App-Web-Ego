const initialState = {
    models: [],
    modelDetails: {},

}

export default function appReducer(state = initialState, action) {

    switch (action.type) {
        case "MODELS_DATA":
            return { ...state, models: action.payload }
        case "MODEL_DETAILS":
            return { ...state, modelDetails: action.payload }

        default:
            return state
    }
}