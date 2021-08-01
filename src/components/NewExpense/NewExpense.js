import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const isEditingHandler = () => {
        setIsEditing(true)
    }

    const cancelEditingExpenseDataHandler = ()=>{
        setIsEditing(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
        //Close the form once it is submitted
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={isEditingHandler} >Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} onCancelEditingExpenseDataHandler={cancelEditingExpenseDataHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense
