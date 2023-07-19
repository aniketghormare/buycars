import { DEALER, ISERROR, ISLOADING, PRODUCT_GET_INVENTERY, PRODUCT_GET_SUCC, SET_FILTER_DATA, SET_SINGLE_PRODUCT } from "./actionType"


const init = {
    isLoading: false,
    isError: false,
    products: [],
    Inventery: [],
    SingleProduct: {},
    dealer: false
}
export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case ISLOADING:
            return { ...state, isLoading: true }
        case PRODUCT_GET_SUCC:
            return { ...state, isLoading: false, products: payload }
        case PRODUCT_GET_INVENTERY:
            return { ...state, isLoading: false, Inventery: payload }
        case SET_FILTER_DATA:
            return { ...state, isLoading: false, products: payload }
        case SET_SINGLE_PRODUCT:
            return { ...state, isLoading: false, SingleProduct: payload }
        case ISERROR:
            return { ...state, isLoading: false, isError: true }
        case DEALER:
            return { ...state, isLoading: false, dealer: !state.dealer }
        default:
            return state
    }
}