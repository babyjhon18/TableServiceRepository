import { LOG_IN } from '../Store/Constants'

const initialState = {
    isChit: undefined,
    terminalDescription: "",
    serviceIP: localStorage.getItem('serviceIP'),
    terminalID: localStorage.getItem('terminalID'),
}

export function loginReduser(state = initialState, action){
    switch(action.type){
        case LOG_IN:{
            const newState = state;
            newState.isChit = action.payload.isChit;
            newState.terminalDescription = action.payload.terminalDescription;
            newState.terminalID = action.payload.terminalID;
            return {...state, newState};
        }
        default:
            return state;
    }
}
