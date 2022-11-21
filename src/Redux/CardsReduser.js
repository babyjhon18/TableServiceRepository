import { CARD_VIEW, UPDATE_CARD_VIEW, CARD_BUMP_ITEM } from '../Store/Constants'

const initialState = {card:"card"}

export function cardViewReduser(state = initialState, action){
    switch(action.type){
        case CARD_VIEW:{
            state = action.payload;
            return state;
        }
        case UPDATE_CARD_VIEW:{
            return state;
        }
        case CARD_BUMP_ITEM:{
            return state;
        }
        default:
            return state
    }
}