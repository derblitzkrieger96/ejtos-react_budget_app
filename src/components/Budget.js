import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [enteredBudget,setEnteredBudget] = useState(budget)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const enteredBudgetHandler = function(event){
        const enteredValue = parseFloat(event.target.value)
        const condition1 = enteredValue > 20000
        const condition2 = enteredValue < totalExpenses
        if (condition1) alert('The value cannot exceed the remaining funds')
        if (condition2) alert(`You cannot reduce the budget value lower than the spending $${totalExpenses}`)
        if (!condition1 && !condition2) setEnteredBudget(enteredValue)
    }

    return (
        <div className='alert alert-secondary'>
  <div className='row align-items-center'>
    <div className='col-auto'>
      <label htmlFor='budgetInput'>Budget:{currency}</label>
      <input
        className="w-50"
        type='number'
        id='budgetInput'
        value={enteredBudget}
        onChange={enteredBudgetHandler}
        min='0'
        step='1'
      />
    </div>
  </div>
</div>

    );
};

export default Budget;