import { tableViewReduser } from '../Redux/TableReduser';
import { cardViewReduser } from '../Redux/CardsReduser';
import { createStore, combineReducers } from 'redux';

const rootReduser = combineReducers({
    tableViewReduser: tableViewReduser,
    cardViewReduser: cardViewReduser,
});

export const store = createStore(rootReduser);


