import Expense from './expense';

const ExpensesList = ({expenses, setEditExpense}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{expenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>

        {expenses.map(expense => (
            <Expense 
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
  )
}

export default ExpensesList