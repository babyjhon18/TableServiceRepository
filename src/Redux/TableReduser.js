import {TABLE_VIEW, UPDATE_TABLE_VIEW, TABLE_BUMP_ITEM} from '../Store/Constants'

const initialState = {table:"table"}

export function tableViewReduser(state = initialState, action){
    switch(action.type){
        case TABLE_VIEW:{
            state = action.payload;
            return state;
        }
        case UPDATE_TABLE_VIEW:{
            return state;
        }
        case TABLE_BUMP_ITEM:{
            return state;
        }
        default:
            return state
    }
}