import React from "react";

import "./ExpenseForm.css";

const AddNewExpense = (props) => {
  const handleOnClick = () => props.onAddNewExpence();

  return <button onClick={handleOnClick}>Add New Expense</button>;
};

export default AddNewExpense;
