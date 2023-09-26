const BudgetControl = ({ budget }) => {
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
                    <span>Available: </span> {formatCant(0)}
                </p>
                <p>
                    <span>Spent: </span> {formatCant(0)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl