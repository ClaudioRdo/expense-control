import { useState, useEffect } from 'react';
import Header from './components/Header';
import ExpensesList from './components/ExpensesList';
import Modal from './components/Modal';
import { generateId } from './helpers';
import IconNewExpense from './assets/img/new-expense.svg';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const [editExpense, setEditExpense] = useState({});
  const [deleteExpense, setDeleteExpense] = useState();

  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {
      setModal(true);
      
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    } 
  }, [editExpense])
  
  const handleNewExpense = () => {
    setModal(true);
    setEditExpense({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    if(expense.id) {
      const updatedExpenses = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState);
      setExpenses(updatedExpenses);
    } else {
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);

    }
    

    setModal(false);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <ExpensesList expenses={expenses} setEditExpense={setEditExpense}/>
          </main>
          <div className='nuevo-gasto'>
            <img src={IconNewExpense} alt="Plus icon"
              onClick={handleNewExpense}
            />
          </div>
        </>

      )}
      {modal && <Modal
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveExpense={saveExpense}
        editExpense={editExpense}
      />}
    </div>
  )
}

export default App
