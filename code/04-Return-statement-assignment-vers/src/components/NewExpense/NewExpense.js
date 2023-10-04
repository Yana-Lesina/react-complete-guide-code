import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import AddNewExpense from "./AddNewExpense";

const NewExpense = (props) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    setShowAddForm(false);
  };

  const showAddNewExpence = (bool) => {
    setShowAddForm(bool);
  };

  return (
    <>
      <div className="new-expense">
        {!showAddForm && (
          <AddNewExpense onAddNewExpence={() => showAddNewExpence(true)} />
        )}
        {showAddForm && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancelNewExpense={() => showAddNewExpence(false)}
          />
        )}
      </div>
    </>
  );
};

export default NewExpense;
