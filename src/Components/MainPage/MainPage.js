import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableView from '../TableView/TableView';
import CardView from '../CardView/CardView';    
import StartMenu from '../StartMenu/StartMenu';    
import {LOG_IN, LOGIN} from '../../Store/Constants';

function MainPage(){

    const dispatch = useDispatch();
    const login = useSelector(state => state.loginReduser);
    
    useEffect(() => {
        if(login.isChit === undefined){
            fetch("http://" + window.SERVER_IP + LOGIN + login.terminalID)
            .then(response => response.json())
            .then(result => {
                if(result !== []){
                    dispatch({type: LOG_IN, payload: { 
                        isChit: result.ischit, terminalDescription: result.description, terminalID: result.id, serviceIP: window.SERVER_IP
                    }})
                }
            });
        }
    }, [])

    if((login.serviceIP !== undefined && login.serviceIP !== null) && 
    (login.terminalID !== undefined && login.terminalID !== null)){
        if(login.isChit !== undefined){
            if(login.isChit){
                return <CardView></CardView>
            }
            else{
                return <TableView></TableView>
            }
        }
    }
    else{
        return <StartMenu></StartMenu>
    }
}

export default MainPage;