import { UPDATE_CARD_VIEW, CARD_BUMP_ITEM, SET_PLAY_AUDIO, UPDATE_TIMER_CARD } from '../Store/Constants'

const initialState = {
    cards: [],
    playAudio: false
}

export function cardViewReduser(state = initialState, action){
    switch(action.type){
        case UPDATE_TIMER_CARD:{
            const cards = [...state.cards];
            cards.map((card) => {
                if(card.timeleft > 0){
                    card.timeleft -= 1;
                }
            })
            return {
                ...state,
                cards: cards
            }
        } 
        case SET_PLAY_AUDIO:{
            return {
                ...state,
                playAudio: false
            }
        }
        case UPDATE_CARD_VIEW:{
            const cards = [...state.cards];
            const existedcard = cards.find(card => card.docnumber === action.payload.docnumber);
            if(existedcard == undefined){
                return {
                    ...state,
                    cards: [...state.cards, action.payload], 
                    playAudio: true
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