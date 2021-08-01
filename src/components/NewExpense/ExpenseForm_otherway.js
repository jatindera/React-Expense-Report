import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    // const [title, setTitle] = useState('')
    // const [amount, setAmount] = useState('')
    // const [date, setDate] = useState('')
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const titleChangeHandler = (event) => {
        console.log(event.target.value)
        //Non Safe way as React schedules the state update. Our title is dependent on previous state
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        //Safe way which guarantees that ..userInput will always be latest
        setUserInput((prevState)=>{
            return {
                ...prevState, title: event.target.value
            }
        })
    }

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
        setUserInput((prevState)=>{
            return {
                ...prevState, amount: event.target.value
            }
        })
    }

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
        setUserInput((prevState)=>{
            return {
                ...prevState, date: event.target.value
            }
        })
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control input">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control input">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control input">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
