import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [currency, setCurrency] = useState('\u20B9')

    const titleChangeHandler = (event) => {
        // console.log(event.target.value)
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title,
            amount,
            date: new Date(date),
            currency
        }
        // console.log(expenseData)
        props.onSaveExpenseDataHandler(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
        setCurrency('\u20B9')
    }

    return (
            <form onSubmit={submitHandler}  >
                <div className="new-expense__controls">
                    <div className="new-expense__control input">
                        <label>Title</label>
                        <input type="text" value={title} onChange={titleChangeHandler}></input>
                    </div>
                    <div className="new-expense__control input">
                        <label>Amount</label>
                        <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                    </div>
                    <div className="new-expense__control input">
                        <label>Date</label>
                        <input type="date" value={date} min="01-01-2019" max="12-31-2022" onChange={dateChangeHandler}></input>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancelEditingExpenseDataHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
    )
}

export default ExpenseForm
