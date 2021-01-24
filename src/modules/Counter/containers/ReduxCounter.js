import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import setCounter from '../redux/actions/setCounter';
import getSomethingAction from '../redux/actions/getSomething';

import CounterView from '../componets/CounterView';

const ReduxCounter = () => {
    const componentName = 'Redux Counter';
    const [loading, setLoading] = useState(false);
    const {counter, something} = useSelector(state => state.Counter);
    const dispatch = useDispatch();

    const handleSetCounter = useCallback(key =>
        dispatch(setCounter[key] && setCounter[key]()), [dispatch]);

    const getSomething = useCallback(() => {
        return dispatch(getSomethingAction())
    }, [dispatch]);

    const handleGetSomething = async () => {
        setLoading(true);
        const result = await getSomething();
        console.log("-> result", result);
        setLoading(false);
    }


    return <CounterView
        loading={loading}
        data={something}
        getSomething={handleGetSomething}
        title={componentName}
        counter={counter}
        setCounter={handleSetCounter}/>
};

export default ReduxCounter;