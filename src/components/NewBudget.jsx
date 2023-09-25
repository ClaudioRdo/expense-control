import React from 'react'

const NewBudget = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='form'>
            <div className='campo'>
                <label htmlFor="">Define budget</label>
                <input type="text"
                    className='nuevo-presupuesto'
                    placeholder='Add budget'
                />
                <input type="submit" value="Add" />
            </div>
        </form>
    </div>
  )
}

export default NewBudget