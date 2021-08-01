import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

    if (props.items.length === 0)
        return <p className="expenses-list__fallback">No expense found</p>
    else {
        return (
            <ul className="expenses-list">
                {
                    props.items.map((item) =>
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                            currency={item.currency}
                        />

                    )
                }
            </ul>
        )
    }
}

export default ExpenseList

