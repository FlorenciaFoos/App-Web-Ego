import axios from "axios"

//fetch de todos los modelos
export const fetchModels = () => dispatch => {
    axios.get("https://challenge.agenciaego.tech/models").then((res) => {
        dispatch({
            type: "MODELS_DATA",
            payload: res.data
        })
    }).catch((error) => console.log(error.message))

}


//fetch de un modelo especifico (by ID)
export const fetchModelDetails = (id) => dispatch => {
    axios.get(`https://challenge.agenciaego.tech/models/${id}`).then((res) => {
        dispatch({
            type: "MODEL_DETAILS",
            payload: res.data
        })
    }).catch((error) => console.log(error.message))

}

//seteo la vista activa  para el menu
export const activeView = (type, state) => dispatch => {
    dispatch({
        type: type,
        payload: state
    })
}


