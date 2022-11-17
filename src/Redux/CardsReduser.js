import { CARD_VIEW, UPDATE_CARD_VIEW, CARD_BUMP_ITEM } from '../../Store/Constants'

export function cardViewReduser(state, action){
    switch(action.type){
        case CARD_VIEW:{
            return state;
        }
        case UPDATE_CARD_VIEW:{
            return state;
        }
        case CARD_BUMP_ITEM:{
            return state;
        }
    }
}