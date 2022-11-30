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
            newState.serviceIP = action.payload.serviceIP;
            newState.terminalID = action.payload.terminalID;
            newState.isChit = action.payload.isChit;
            newState.terminalDescription = action.payload.terminalDescription;
            return {...state, newState};
        }
        default:
            return state;
    }
}
