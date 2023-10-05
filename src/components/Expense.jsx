import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../helpers";

import IconSaving from '../assets/img/icon_saving.svg';
import IconFood from '../assets/img/icon_food.svg';
import IconHealth from '../assets/img/icon_health.svg';
import IconHouse from '../assets/img/icon_house.svg';
import IconLeisure from '../assets/img/icon_leisure.svg';
import IconSubscriptions from '../assets/img/icon_subscriptions.svg';
import IconExpenses from '../assets/img/icon_expenses.svg';

const iconsDictionary = {
    saving: IconSaving,
    food: IconFood,
    house: IconHouse,
    miscellaneous: IconExpenses,
    health: IconHealth,
    leisure: IconLeisure,
    subscriptions: IconSubscriptions,
};

const Expense = ({ expense, setEditExpense, deleteExpense }) => {
    const { category, name, amount, id, date } = expense;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setEditExpense(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    );
    
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={()=> deleteExpense(id)}
                destructive={true}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >

                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <div className="descripcion-gasto">
                            <img src={iconsDictionary[category]} alt="category" />
                            <p className="categoria">{category}</p>
                            <p className="nombre-gasto">{name}</p>
                            <p className="fecha-gasto">Added: <span>{formatDate(date)}</span></p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">${amount}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Expense