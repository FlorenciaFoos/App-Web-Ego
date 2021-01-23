const initialState = {
    models: [],
    modelDetails: {},
    home: true,
    details: false,

}

export default function appReducer(state = initialState, action) {

    switch (action.type) {
        case "MODELS_DATA":
            return { ...state, models: action.payload }
        case "MODEL_DETAILS":
            return { ...state, modelDetails: action.payload }
        case "home":
            return { ...state, home: action.payload }
        case "details":
            return { ...state, details: action.payload }
        default:
            return state
    }
}