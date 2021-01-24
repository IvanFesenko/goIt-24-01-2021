import React from "react";

const CounterView = ({title, counter, setCounter, getSomething, data, loading}) => {

    if (loading) return <div>loading...</div>

    return <div>
        <div>{title}</div>
        <div onClick={() => setCounter('increment')}> +</div>
        <div>{counter}</div>
        <div onClick={() => setCounter('decrement')}> -</div>

        <div onClick={getSomething}>
            getSomething
        </div>

        <div>{JSON.stringify(data)}</div>
    </div>
};

export default CounterView;