import { useState } from 'react'

const AddExpenses = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6 bg-gray-100 rounded-xl shadow-md mb-6 w-full">

      {/* Heading */}
      <h1 className='text-center text-2xl sm:text-4xl font-bold mb-2'>
        Expense Tracker
      </h1>
      <hr className='mb-4' />

      {/* Form */}
      <div className="flex flex-col sm:flex-row gap-3">

        {/* Title */}
        <input
          type="text"
          placeholder='Expense Title..'
          className='flex-1 border border-gray-300 rounded px-3 py-2 capitalize text-sm sm:text-base'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Amount */}
        <input
          type="number"
          placeholder='Amount..'
          className='flex-1 border border-gray-300 rounded px-3 py-2 text-sm sm:text-base'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={() => {
            if(!title || !amount) return;
            onAddExpense({ title, amount });
            setTitle('');
            setAmount('');
          }}
          className='bg-green-600 text-white rounded px-4 py-2 text-sm sm:text-base font-medium border border-green-700 hover:bg-white hover:text-green-700 transition'
        >
          Add
        </button>

      </div>
    </div>
  )
}

export default AddExpenses
