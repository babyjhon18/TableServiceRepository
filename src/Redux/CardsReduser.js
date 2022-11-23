import { UPDATE_CARD_VIEW, CARD_BUMP_ITEM, ADD_CARD } from '../Store/Constants'

const initialState = {
    cards: []
}

export function cardViewReduser(state = initialState, action){
    switch(action.type){
        case ADD_CARD:{
            return { 
                ...state,
                cards: [...state.cards, action.payload] 
            }
        }
        case UPDATE_CARD_VIEW:{
            const cards = [...state.cards];
            const card = cards.find(card => card.docnumber === action.payload.docnumber);
            console.log(card);
            if(card){
                const item = card.items.find(item => item.id === action.payload.id);
                console.log(item);
                if(item){
                    item.status = action.payload.itemStatus;
                }
            }
            return{
                ...state,
                cards: cards
            }
        }
        case CARD_BUMP_ITEM:{
            return { 
                ...state, 
                cards: state.cards.filter(card => {
                    return card.docnumber !== action.payload;
                })
            }
        }
        default:
            return state
    }
}