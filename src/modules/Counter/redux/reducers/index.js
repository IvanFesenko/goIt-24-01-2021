export const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    GET_SOMETHING: 'GET_SOMETHING',
    GET_SOMETHING_SUCCESS: 'GET_SOMETHING_SUCCESS',
    GET_SOMETHING_FAIL: 'GET_SOMETHING_FAIL',
}

const initialState = {
    counter: 0,
    something: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.INCREMENT): {
            return {...state, counter: state.counter + 1}
        }

        case (actionTypes.DECREMENT):
            return {...state, counter: state.counter - 1}

        case (actionTypes.GET_SOMETHING_SUCCESS):
            return {...state, something: action.payload}

        default:
            return state;
    }
};

export default reducer;