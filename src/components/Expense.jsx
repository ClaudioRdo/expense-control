import { formatDate } from "../helpers";

import IconSaving from '../assets/img/icon-saving.svg';
import IconFood from '../assets/img/icon-food.svg';
import IconHealth from '../assets/img/icon-health.svg';
import IconHouse from '../assets/img/icon-house.svg';
import IconLeisure from '../assets/img/icon-leisure.svg';
import IconSubscriptions from '../assets/img/icon-subscriptions.svg';
import IconExpenses from '../assets/img/icon-expenses.svg';

const iconsDictionary = {
    saving: IconSaving,
    food: IconFood,
    house: IconHouse,
    miscellaneous: IconExpenses,
    health: IconHealth,
    leisure: IconLeisure,
    subscriptions: IconSubscriptions,
};

const expense = ({ expense }) => {
    const { category, name, amount, id, date } = expense;
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <img src={iconsDictionary[category]} alt="" />
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