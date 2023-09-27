import { useState } from 'react';
import CloseBtn from '../assets/img/close.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const hideModal = () => {
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false)
        }, 500);
    };

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={CloseBtn}
                    alt="Close modal"
                    onClick={hideModal}
                />
            </div>

            <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
                <legend>New expense</legend>
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

                <input type="submit" value="Add expense" />
            </form>
        </div>
    )
}

export default Modal