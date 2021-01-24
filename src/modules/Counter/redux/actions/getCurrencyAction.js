import {actionTypes} from "../reducers";

export const getCurrencyAction = () => {
    return {
        type: actionTypes.GET_CURRENCY_LIST,
        request: async () => fetch(`https://api.exchangeratesapi.io/latest`)
    }
}
export const getCurrencyActionWithParams = (params) => {
    const search = params ? new URLSearchParams(params) : ''
    return {
        type: actionTypes.GET_CURRENCY,
        request: async () => fetch(`https://api.exchangeratesapi.io/latest?${search}`)
    }
}