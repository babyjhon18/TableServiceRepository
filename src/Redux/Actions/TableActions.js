import { TABLE_VIEW, UPDATE_TABLE_VIEW, TABLE_BUMP_ITEM, UPDATE_TABLE_TIMER } from '../../Store/Constants'

export function UpdateTimer(){
    return {
        type: UPDATE_TABLE_TIMER,
    }
}

export function ViewItems(){
    return {
        type: TABLE_VIEW,
    }
}

export function UpdateItemsView(){
    return {
        type: UPDATE_TABLE_VIEW,
    }
}

export function BumpDocnumber(){
    return {
        type: TABLE_BUMP_ITEM,
    }
}