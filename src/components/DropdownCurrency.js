import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './DropdownCurrency.css'


const DropdownCurrency = function () {
    const { dispatch } = useContext(AppContext);
    const [ currency,setCurrency] = useState("");

    const setCurrencyHandler = function (event) {
        setCurrency(event.target.value)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return(
        <div className='alert alert-secondary dropdown'>
            <label htmlFor='currency-dropdown'>Currency:</label>
            <select id='currency-dropdown' onChange={setCurrencyHandler}>
                <option value="" hidden></option>
                <option value='$'>$ Dollar</option>
                <option value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Ruppee</option>
            </select>
           
        </div>

    )
}

export default DropdownCurrency