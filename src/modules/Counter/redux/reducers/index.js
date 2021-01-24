export const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    GET_CURRENCY: 'GET_CURRENCY',
    GET_CURRENCY_SUCCESS: 'GET_CURRENCY_SUCCESS',
    GET_CURRENCY_FAIL: 'GET_CURRENCY_FAIL',
    GET_CURRENCY_LIST: 'GET_CURRENCY_LIST',
    GET_CURRENCY_LIST_SUCCESS: 'GET_CURRENCY_LIST_SUCCESS',
    GET_CURRENCY_LIST_FAIL: 'GET_CURRENCY_LIST_FAIL',
}

const initialState = {
    counter: 0,
    currency: null,
    currencyList: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.INCREMENT): {
            return {...state, counter: state.counter + 1}
        }

        case (actionTypes.DECREMENT):
            return {...state, counter: state.counter - 1}

        case (actionTypes.GET_CURRENCY_SUCCESS):
            return {...state, currency: action.payload}

        case (actionTypes.GET_CURRENCY_LIST_SUCCESS):
            return {...state, currencyList: action.payload}

        default:
            return state;
    }
};

export default reducer;