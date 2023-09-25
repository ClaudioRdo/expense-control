import React, { useState } from 'react'
import Message from './Message';

const NewBudget = ({budget, setBudget}) => {
    const [message, setMessage] = useState();

    const handleBudget = (e) => {
        e.preventDefault();
        if(!Number(budget) || Number(budget) < 0) {
            setMessage('It is not a valid budget')
        }else{

        } 
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handleBudget} className='formulario'>
            <div className='campo'>
                <label htmlFor="">Define budget</label>
                <input type="text"
                    className='nuevo-presupuesto'
                    placeholder='Add budget'
                    value={budget}
                    onChange={ (e) => setBudget(e.target.value)}
                />
                <input type="submit" value="Add" />

                {message && <Message type='error'>{message}</Message>}
            </div>
        </form>
    </div>
  )
}

export default NewBudget