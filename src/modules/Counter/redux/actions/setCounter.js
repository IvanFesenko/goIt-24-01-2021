import {actionTypes} from '../reducers';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT,
    }
};
export const extraAction = () => {
    return {
        type: 'EXTRA'
    }
};

const setCounter = {increment, decrement, extraAction};

export default setCounter;