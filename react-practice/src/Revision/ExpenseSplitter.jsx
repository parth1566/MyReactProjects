import React from 'react'
import { useState } from 'react';
import './ExpenseSplitter.css'

const ExpenseSplitter = () => {
    const[expenses, setExpenses] = useState([]);
    const[name, setName] = useState("");
    const[amount, setAmount] = useState("");
    const [people, setPeople] = useState("1");

    function handleAdd() {
        if(!name || !amount) {
            return;
        }
        const newExpense = {id: Date.now(), name: name, amount: Number(amount)};
        setExpenses([...expenses, newExpense]);
        setName("");
        setAmount("");
    }

    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  return (
    <div className='expense-card'>
      <h1 className='expense-title'>💰 Expense Splitter</h1>
      <input className = 'expense-input' type="text" value={name} placeholder='Enter item name ' onChange={(e) => setName(e.target.value)}/>
      <input className = 'expense-input' type="number" value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
      <button className='expense-btn' onClick={handleAdd}>Add expense</button>
      {expenses.length === 0 ? (
        <p className='expense-empty'>No expenses yet 🪹</p>
    ) : (
    <ul className='expense-list'>
        {expenses.map((exp) => (
    <li key={exp.id}>{exp.name} — ₹{exp.amount}</li>
    ))}
    </ul>
    )}
      <h3 className='expense-total'>Total: ₹{total}</h3>
      <input className = 'expense-input'  type="number" value={people} onChange={(e) => setPeople(e.target.value)} />
      {people > 0 && <h3 style={{color: 'beige'}}>Each person pays: ₹{(total / people).toFixed(2)}</h3>} 
    </div>
  )
}

export default ExpenseSplitter
