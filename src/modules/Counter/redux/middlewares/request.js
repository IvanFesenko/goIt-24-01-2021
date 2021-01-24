const typeSuffix = {
    success: '_SUCCESS',
    fail: '_FAIL'
}

export const requestMiddleware = ({dispatch}) =>
    next => action => {
        if (!action.request) {
            return next(action)
        }

        const {request, type, payload} = action;

        next({type, payload});

        const makeRequest = async () => {
            try {
                const response = await request();
                if (response.status !== 200) {
                    throw {message: response.statusText, code: response.status}
                }
                const contentType = ['application/json'].includes(response.headers.get('Content-Type'));
                if (contentType) {
                    const data = await response.json();

                    next({type: `${type}${typeSuffix.success}`, payload: {...payload, ...data}})

                    return {...data};
                }

                throw {message: "Couldn't resolve response", code: response.status}

            } catch (e) {
                let error = {};
                if (!e.response) {
                    const {message, code} = e;
                    error = {message, code}
                } else {
                    const {message, code} = e.payload;
                    error = {message, code};
                }
                next({type: `${type}${typeSuffix.fail}`, payload: {...payload, error}});

                return {error}

            }
        };

        return makeRequest();
    };




