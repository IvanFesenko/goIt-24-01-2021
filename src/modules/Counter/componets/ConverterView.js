import React from "react";

const ConverterView = ({currency, setData, currencyList, onSubmit}) => {

    return <div>
        <div>
            <span>Base</span>
            <select onChange={(e) => setData({base: e.target.value})} name="base" id="">
                {currencyList?.rates && Object.keys(currencyList.rates).map(key =>
                    <option value={key}
                            key={key}>{key}
                    </option>
                )}
            </select>
        </div>
        <div>
            <span>Current</span>
            <select onChange={(e) => setData({symbols: e.target.value})} name="symbols" id="">
                {currencyList?.rates && Object.keys(currencyList.rates).map(key =>
                    <option value={key}
                            key={key}>{key}
                    </option>
                )}
            </select>
        </div>

        <div>
            <button onClick={onSubmit}>Submit</button>
        </div>
        {currency && <div>
            <span>result</span>
            <div>one {currency.base} is
                equal {Object.entries(currency.rates).map(([key, value]) => (<span>{value.toFixed(2)} {key}</span>))}
            </div>
        </div>}

    </div>
};


export default ConverterView;