import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
const BudgetControl = ({ 
        budget,
        setBudget,
        expenses,
        setExpenses,
        setIsValidBudget
    }) => {

    const [ percent, setPercent] = useState(10);
    const [ available, setAvailable ] = useState(0);
    const [ spent, setSpent ] = useState(0);
 
    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.cant + total, 0);
        const totalAvailable = budget - totalSpent;

        const newPercent = (( ( budget - totalAvailable ) / budget  ) * 100).toFixed(2);

        setAvailable(totalAvailable);
        setSpent(totalSpent);
        setTimeout(() => {
            setPercent(newPercent);
        }, 1500);
    }, [expenses])
    
    const formatCant = (cant) => {
        return cant.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

    const handleResetApp = () => {
        const res = confirm('Are you sure reset app?');

        if(res) {
            setExpenses([]);
            setBudget(0);
            setIsValidBudget(false);
        } 
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percent > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: percent > 100 ? '#DC2626' : '#3B82F6',
                    })}
                    value={percent}
                    text={`${percent}% Spent`}
                />
            </div>
            <div className='contenido-presupuesto'>
            <button
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                >
                    Reset App
                </button>
                <p>
                    <span>Budget: </span>{formatCant(budget)}
                </p>

                <p className={`${available < 0 ? 'negativo' : '' }`}>
                    <span>Disponible: </span>{formatCant(available)}
                </p>

                <p>
                    <span>Gastado: </span>{formatCant(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl