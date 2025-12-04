
import { useEffect, useState } from 'react'
import AllExpenses from './components/AllExpenses'
import AddExpenses from './components/AddExpenses'

function App() {
  const [Expenses, setExpenses] = useState(()=>{
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });


  // useEffect(() => {
  //   const storedExpenses = localStorage.getItem('expenses');
  //   if (storedExpenses) {
  //     setExpenses(JSON.parse(storedExpenses));
  //   }
  // }, []);

  useEffect(() => {
    if(Expenses.length>0){
      localStorage.setItem('expenses', JSON.stringify(Expenses));
    }
  }, [Expenses]);



  const AddExpense = ({ title, amount }) => {
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount)
    };

    setExpenses(prev => [newExpense, ...prev]);
  }

  const DeleteExpense = (id) => {
    setExpenses(Expenses.filter(expense => expense.id !== id));
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 px-4 flex justify-center items-start py-6 sm:py-10">

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-4 sm:p-6">
        
        {/* Add Form */}
        <AddExpenses onAddExpense={AddExpense} />

        {/* List */}
        <AllExpenses expenses={Expenses} onDeleteExpense={DeleteExpense} />

      </div>

    </div>
  )
}

export default App
