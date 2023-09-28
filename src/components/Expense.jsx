import { formatDate } from "../helpers";

const expense = ({ expense }) => {
    const { category, name, amount, id, date } = expense;
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">{category}</p>
                    <p className="nombre-gasto">{name}</p>
                    <p className="fecha-gasto">Added: <span>{formatDate(date)}</span></p>
                </div>
            </div>
            <p className="cantidad-gasto">${amount}</p>
        </div>
    )
}

export default expense