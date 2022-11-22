import { CARD_VIEW, UPDATE_CARD_VIEW, CARD_BUMP_ITEM, ADD_CARD } from '../Store/Constants'

const initialState = {
    cards: []
}


export function cardViewReduser(state = initialState, action){
    switch(action.type){
        case CARD_VIEW:{
            return { // returning a copy of orignal state 
                ...state, //copying the original state
                cards: [...state.cards, action.payload] //new todos array 
            }
        }
        case ADD_CARD:{
            return { // returning a copy of orignal state 
                ...state, //copying the original state
                cards: [...state.cards, action.payload] //new todos array 
            }
        }
        case UPDATE_CARD_VIEW:{
            //state
            return state;
        }
        case CARD_BUMP_ITEM:{
            return {  // returning a copy of orignal state
                ...state, //copying the original state
                cards: state.cards.filter(card => card.docnumber !== action.payload) 
            }
        }
        default:
            return state
    }
}