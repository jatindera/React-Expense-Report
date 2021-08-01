import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const rupee = "\u20B9"
const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    currency: rupee
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
    currency: rupee
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    currency: rupee
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    currency: rupee
  },
];

function App() {

  const [expenses, setExpenses] = useState(initialExpenses)

  const addExpenseHandler = (expense) => {
    console.log("Inside App.js")
    console.log(expense)
    setExpenses((prevState) => {
      return [expense,...prevState]
    })
    console.log("State is updated...")
    console.log(expenses)
  }

  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
