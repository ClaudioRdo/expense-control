import { useState, useEffect } from 'react';
import Message from './Message';
import CloseBtn from '../assets/img/close.svg';

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense, editExpense, setEditExpense }) => {

    const [msg, setMsg] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
      if(Object.keys(editExpense).length > 0) {
        setName(editExpense.name);
        setAmount(editExpense.amount);
        setCategory(editExpense.category);
        setId(editExpense.id);
        setDate(editExpense.date);
      }
    }, []);
    

    const hideModal = () => {
        setAnimateModal(false);
        setEditExpense({});
        setTimeout(() => {
            setModal(false)
        }, 500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if([name, amount, category].includes('') || amount <= 0){
            setMsg('All fields are required');
            return;
        };

        saveExpense({name, amount, category, id, date});

        setMsg('');
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={CloseBtn}
                    alt="Close modal"
                    onClick={hideModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
                <legend>{editExpense.name ? 'Edit expense' : 'New expense'}</legend>
                {msg && <Message type='error'>{msg}</Message>}
                <div className='campo'>
                    <label htmlFor="name">Expense name</label>

                    <input
                        id='name'
                        type="text"
                        placeholder='Add expense name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="amount">Amount</label>

                    <input
                        id='amount'
                        type="number"
                        placeholder='Add amount expense'
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="category">Category</label>

                    <select
                        id="category"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="">-- Select --</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="miscellaneous">Miscellaneous</option>
                        <option value="health">Health</option>
                        <option value="leisure">Leisure</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>

                <input 
                    type="submit" 
                    value={editExpense.name ? 'Save changes' : 'Add expense'} 
                />
            </form>
        </div>
    )
}

export default Modal