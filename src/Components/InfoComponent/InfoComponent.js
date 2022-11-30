import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../InfoComponent/InfoComponent.css'
import { TABLE_VIEW, PREPARATION_UPDATE, ADD_CARD, CHIT_UPDATE, UPDATE_CARD_VIEW, LOG_IN} from '../../Store/Constants'

function InfoComponent(props){

    const [dateTime, setDateTime] = useState();
    const dispatch = useDispatch();
    const login = useSelector(state => state.loginReduser);

    useEffect(() => {
        let time = new Date().toLocaleTimeString({},{hour12: true});
        setDateTime(time);
        setInterval(() => {
            let time = new Date().toLocaleTimeString({},{hour12: true});
            setDateTime(time);
        }, 1000)
    }, [])

    const LogOut = () => {
        window.location.reload();
        localStorage.clear();
    }

    const Refresh = () => {
        switch(props.name){
            case "table":{
                fetch("http://" + localStorage.getItem('serviceIP') + PREPARATION_UPDATE + localStorage.getItem('terminalID'))
                .then(response => response.json())
                .then(result => {
                    dispatch({type: TABLE_VIEW, payload: result});
                });
                break;
            }
            case "card":{
                fetch("http://" + localStorage.getItem('serviceIP') + CHIT_UPDATE + localStorage.getItem('terminalID'))
                .then(response => response.json())
                .then(result => {
                    if (result.length > 0){
                        result.map((card) => {
                            card.items.every(item => {
                                if(item.status === 0){
                                    dispatch({type: ADD_CARD, payload: card});
                                }
                                else{
                                    dispatch({type: UPDATE_CARD_VIEW, payload: { 
                                        docnumber: card.docnumber, id: item.id, itemStatus: item.status  
                                    }});
                                }
                            })
                        })
                    }
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
                    <button onClick={Refresh}>Refresh</button>
                </div>
                {/* <div className="col buttons">
                    <button >Previous</button>
                </div>
                <div className="col buttons">
                    <button >Next</button>
                </div> */}
                <div>
                    <button onClick={LogOut}>Log out</button>
                </div>
            </div>
        </div>
    )
}

export default InfoComponent;