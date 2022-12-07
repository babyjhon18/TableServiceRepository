import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../InfoComponent/InfoComponent.css'
import { TABLE_VIEW, PREPARATION_UPDATE, PREPARATION_RECALL, CHIT_UPDATE, CHIT_RECALL, UPDATE_CARD_VIEW} from '../../Store/Constants';

function InfoComponent(props){

    const [dateTime, setDateTime] = useState();
    const dispatch = useDispatch();
    const login = useSelector(state => state.loginReduser);
    const cards = useSelector(state => state.cardViewReduser)

    useEffect(() => {
        let time = new Date().toLocaleTimeString({},{hour12: false});
        setDateTime(time);
        setInterval(() => {
            let time = new Date().toLocaleTimeString({},{hour12: false});
            setDateTime(time);
        }, 1000)
    }, [])

    const LogOut = () => {
        window.location.reload();
        localStorage.clear();
    }

    const Recall = () => {
        switch(props.name){
            case "table":{
                fetch("http://" + window.SERVER_IP + PREPARATION_RECALL + login.terminalID + "&recallcount=" + window.RECALL_COUNT)
                .then(response => {
                    Refresh();
                });
                break;
            }
            case "card":{
                fetch("http://" + window.SERVER_IP + CHIT_RECALL + login.terminalID + "&recallcount=" + window.RECALL_COUNT)
                .then(response => {
                    Refresh();
                })
                break;
            }
        }
    }

    const Refresh = () => {
        switch(props.name){
            case "table":{
                fetch("http://" + window.SERVER_IP + PREPARATION_UPDATE + login.terminalID)
                .then(response => response.json())
                .then(result => {
                    dispatch({type: TABLE_VIEW, payload: result});
                });
                break;
            }
            case "card":{
                fetch("http://" + window.SERVER_IP + CHIT_UPDATE + login.terminalID)
                .then(response => response.json())
                .then(result => {
                    result.map((card) => {
                        dispatch({type: UPDATE_CARD_VIEW, payload: card});
                    });
                });
                break;
            }
        }
        
    }

    return(
        <div className="row headerLine">
            <div className="col time">
                {dateTime} <span className="chit">{login.terminalID} - {login.terminalDescription}</span>
            </div>
            <div className="col justify-content-end buttons">
                <div>
                    <button onClick={Recall}>Recall</button>
                </div>
                <div>
                    <button onClick={Refresh}>Refresh</button>
                </div>
                <div>
                    <button onClick={LogOut}>Log out</button>
                </div>
            </div>
        </div>
    )
}

export default InfoComponent;