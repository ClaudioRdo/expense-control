import { useState, useEffect } from "react"
const BudgetControl = ({ budget, expenses }) => {

    const [ available, setAvailable ] = useState(0);
    const [ spent, setSpent ] = useState(0);
 
    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.cant + total, 0);
        const totalAvailable = budget - totalSpent;

        setAvailable(totalAvailable);
        setSpent(totalSpent);
    }, [expenses])
    
    const formatCant = (cant) => {
        return cant.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Graph here</p>
            </div>
            <div className='contenido-presupuesto'>

                <p>
                    <span>Budget: </span> {formatCant(budget)}
                </p>
                <p>
                    <span>Available: </span> {formatCant(available)}
                </p>
                <p>
                    <span>Spent: </span> {formatCant(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl