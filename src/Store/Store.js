import { tableViewReduser } from '../Redux/TableReduser';
import { cardViewReduser } from '../Redux/CardsReduser';
import { loginReduser } from '../Redux/LoginReduser';
import { createStore, combineReducers } from 'redux';

const rootReduser = combineReducers({
    tableViewReduser: tableViewReduser,
    cardViewReduser: cardViewReduser,
    loginReduser: loginReduser,
});

export const store = createStore(rootReduser);


