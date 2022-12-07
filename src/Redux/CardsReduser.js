import { UPDATE_CARD_VIEW, CARD_BUMP_ITEM } from '../Store/Constants'

const initialState = {
    cards: []
}

export function cardViewReduser(state = initialState, action){
    switch(action.type){
        case UPDATE_CARD_VIEW:{
            const cards = [...state.cards];
            const existedcard = cards.find(card => card.docnumber === action.payload.docnumber);
            if(existedcard == undefined){
                return {
                    ...state,
                    cards: [...state.cards, action.payload] 
                }
            }
            else{
                const newItems = [];
                action.payload.items.map((newitem) => {
                    let Index = existedcard.items.findIndex((item) => newitem.id === item.id);
                    if(Index >= 0){
                        existedcard.items[Index] = newitem;
                    }
                    else{
                        newItems.push(newitem);
                    }
                });  
                existedcard.items.push(...newItems);
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