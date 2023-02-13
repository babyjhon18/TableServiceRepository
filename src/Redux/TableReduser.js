import {TABLE_VIEW, UPDATE_TABLE_VIEW, TABLE_BUMP_ITEM, UPDATE_TABLE_TIMER} from '../Store/Constants'

const initialState = {
    table: [],
    totalItems: 0,
    currentPage: 0, 
    countOfPages: 0,
}

export function tableViewReduser(state = initialState, action){
    switch(action.type){
        case UPDATE_TABLE_TIMER:{
            const table = [...state.table];
            table.map((tableItem) => {
                if(tableItem.timeleft > 0){
                    tableItem.timeleft -= 1;
                }
            })
            return {
                ...state,
                table: table
            }
        } 
        case TABLE_VIEW:{
            return { 
                ...state,
                table: [...state.table, ...action.payload] 
            }
        }
        case UPDATE_TABLE_VIEW:{
            return state;
        }
        case TABLE_BUMP_ITEM:{
            return { 
                ...state, 
                table: state.table.filter(row => {
                    return row.id != action.payload;
                })
            }
        }
        default:
            return state
    }
}