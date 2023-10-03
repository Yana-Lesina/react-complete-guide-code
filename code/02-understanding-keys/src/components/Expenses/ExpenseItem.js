import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [count, setCount] = React.useState(0);

  const handelClick = () => setCount((prev) => prev + 1);

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <div className='expense-item__price'>${count}</div>
        <button onClick={handelClick}>Increase</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
