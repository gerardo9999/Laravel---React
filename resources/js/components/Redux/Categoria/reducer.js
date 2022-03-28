import { ACTION_TYPE } from "./actionType";


const INIT = {
    error: "",
    data: [],
}


const reducerCategoria = (state = INIT, action) => {

    switch (action.Type) {
        case ACTION_TYPE.LIST_CATEGORIA_SUCCESS:
            return { ...state, data: action.payload }
            break;
        case ACTION_TYPE.DELETE_CATEGORIA_ERROR:
            return { ...state, error: action.payload }


        default:
            return state
            break;
    }
}


export default reducerCategoria;