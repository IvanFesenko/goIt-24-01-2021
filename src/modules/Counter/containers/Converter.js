import React, {useCallback, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import ConverterView from "../componets/ConverterView";
import {getCurrencyAction, getCurrencyActionWithParams} from "../redux/actions/getCurrencyAction";

const Counter = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    const {currencyList, currency} = useSelector(state => state.Counter);
    const dispatch = useDispatch();


    const getCurrency = useCallback(() => {
        return dispatch(getCurrencyAction())
    }, [dispatch]);

    const getCurrencyWithParams = useCallback((params) => {
        return dispatch(getCurrencyActionWithParams(params))
    }, [dispatch]);

    useEffect(() => {
        getCurrency();
    }, [getCurrency]);


    const handleGetCurrency = async () => {
        setLoading(true);
        await getCurrencyWithParams(data);
        setLoading(false);
    }

    const handleSetData = (entry) => {
        if (entry) setData(pS => ({...pS, ...entry}));
    }

    return <ConverterView onSubmit={handleGetCurrency} setData={handleSetData} currency={currency}
                          currencyList={currencyList}/>
};

export default Counter;