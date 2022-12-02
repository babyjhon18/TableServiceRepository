import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableView from '../TableView/TableView';
import CardView from '../CardView/CardView';    
import StartMenu from '../StartMenu/StartMenu';    

function MainPage(){

    const login = useSelector(state => state.loginReduser);

    if((login.serviceIP !== "") && 
    (login.terminalID !== 0)){
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