import {actionTypes} from "../reducers";

const getSomething = (params) => {
    return {
        type: actionTypes.GET_SOMETHING,
        request: async () => fetch('https://api.exchangeratesapi.io/latest')
    }
}

export default getSomething;