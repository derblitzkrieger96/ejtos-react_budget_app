import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.currency}{props.cost}</td>
        <td><BsFillPlusCircleFill onClick={event=> increaseAllocation(props.name)} 
        style={{ backgroundColor: 'white', color: 'green', fontSize:'2rem' }}
        ></BsFillPlusCircleFill></td>
        <td><AiFillMinusCircle onClick={event=> decreaseAllocation(props.name)} 
        style={{ backgroundColor: 'white', color: 'red', fontSize:'2rem' }}
        ></AiFillMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
