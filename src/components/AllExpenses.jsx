import React from 'react'

const AllExpenses = ({ expenses, onDeleteExpense }) => {
  // Calculate total
  const totalAmount = expenses
    .reduce((total, expense) => total + expense.amount, 0)
    .toFixed(2);

  return (
    <div className="w-full">

      {/* If no expenses */}
      {expenses.length === 0 ? (
        <p className="text-center text-gray-500 text-lg sm:text-2xl mb-4">
          No expenses added yet.
        </p>
      ) : (
        <div className="flex flex-col sm:flex-row text-lg sm:text-xl justify-between items-center mb-4 px-2 gap-2">
          <h2 className="font-semibold">All Expenses</h2>
          <span className="font-medium text-green-600">
            Total Amount: ${totalAmount}
          </span>
        </div>
      )}

      {/* Expense List */}
      <div className="flex flex-col gap-3">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-300 rounded-lg shadow-sm bg-white gap-3"
          >
            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold capitalize">
              {expense.title}
            </h3>

            {/* Amount + Delete button */}
            <div className="flex items-center gap-4 sm:gap-10 w-full sm:w-auto justify-between">
              <span className="font-bold text-green-600 text-sm sm:text-base">
                ${expense.amount.toFixed(2)}
              </span>

              <button
                className="text-sm sm:text-base text-white border border-red-700 rounded px-3 py-1 bg-red-500 hover:bg-white hover:text-red-700 transition"
                onClick={() => onDeleteExpense(expense.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AllExpenses
