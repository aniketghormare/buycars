
import { ISERROR, ISLOADING, LOGIN_SUCC, LOGOUT, USER } from "./actionType"


const init = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
    user: ""
}
export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case ISLOADING:
            return { ...state, isLoading: true }
        case LOGIN_SUCC:
            return { ...state, isLoading: false, isAuth: true, token: payload }
        case USER:
            return { ...state, isLoading: false, user: payload }
        case ISERROR:
            return { ...state, isLoading: false, isError: true }
        case LOGOUT:
            return { ...state, isLoading: false, isAuth: false,token:"" }
        default:
            return state
    }
}