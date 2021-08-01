import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {

    const [year, setYear] = useState('All')

    const changeYearHandler = (selectedYear) => {
        console.log(selectedYear)
        setYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter((item) => {
        console.log(year)
        if (year === 'All') {
            return props.expenses
        }
        else {
            return item.date.getFullYear().toString() === year
        }
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesFilter selectedYear={year} onChangeYearHandler={changeYearHandler} />
                <ExpenseList items={filteredExpenses}></ExpenseList>
            </Card>
        </div>
    )
}

export default Expenses
