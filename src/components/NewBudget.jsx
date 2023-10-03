import React, { useState } from 'react';
import Message from './Message';

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
    const [message, setMessage] = useState();

    const handleBudget = (e) => {
        e.preventDefault();
        if (!budget || budget < 0) {
            setMessage('It is not a valid budget');
            return;
        };

        setIsValidBudget(true);
        setMessage('');

    }
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario'>
                <div className='campo'>
                    <label htmlFor="newBudget">Define budget</label>
                    <input type="number"
                        id='newBudget'
                        className='nuevo-presupuesto'
                        placeholder='Add budget'
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                    />
                    <input type="submit" value="Add" />

                    {message && <Message type='error'>{message}</Message>}
                </div>
            </form>
        </div>
    )
}

export default NewBudget