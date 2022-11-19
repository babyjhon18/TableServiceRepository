import { CARD_VIEW, UPDATE_CARD_VIEW, CARD_BUMP_ITEM } from '../../Store/Constants'

export function ViewCards(){
    return {
        type: CARD_VIEW,
    }
}

export function UpdateViewCards(){
    return {
        type: UPDATE_CARD_VIEW,
    }
}

export function BumpCard(){
    return {
        type: CARD_BUMP_ITEM,
    }
}