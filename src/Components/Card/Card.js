import Item from "../Item/Item";
import '../Card/Card.css';
import { useDispatch, useSelector } from "react-redux";
import { CARD_BUMP_ITEM, CHIT_BUMP, CHIT_READY } from "../../Store/Constants";

function Card(props){

    const cards = useSelector(state => state.cardViewReduser);
    const dispatch = useDispatch(); 
    var bg = "green";

    function bumpCard(event){
        fetch("http://" + window.SERVER_IP + CHIT_BUMP + event.target.value)
        .then(response => {
            dispatch({type: CARD_BUMP_ITEM, payload: event.target.value});
        });
    }

    function readyCard(event){
        fetch("http://" + window.SERVER_IP + CHIT_READY + event.target.value);
    }

    if((props.tableItem.timeleft <= window.TIME_1 * 60) && (props.tableItem.timeleft > window.TIME_2 * 60)){ 
        bg = window.COLOR_1;
    }

    if((props.tableItem.timeleft <= window.TIME_2 * 60) && (props.tableItem.timeleft >= 0)){ 
        bg = window.COLOR_2;
    }

    return(
        <div>
            <div className="mainHeader">
                <div className="Header" style={{backgroundColor: bg}}>
                    <div className="col doc" style={{maxWidth: "60px"}}>
                    {
                        props.tableItem.ponum !== "" ? 
                        <div className="ponum">
                            <div >Doc#:<br />
                            <div className="docValue">{props.tableItem.docnumber}</div></div>
                            <div className="docValue">{props.tableItem.ponum}</div>
                        </div> :
                        <div>
                            <div>Doc#:<br />
                            <div className="docValue">{props.tableItem.docnumber}</div></div>
                        </div>
                    }  
                    </div>
                    <div className="col tabl" style={{minWidth: "110px"}}>
                        <div>Table#: &nbsp;<span className="tablValue">{props.tableItem.tableno}</span></div>
                        {
                            props.tableItem.timeleft != -1 ?
                            <div>
                                <div className="col timeLeft">Time left: {String(props.tableItem.timeleft/60|0).padStart(2, '0')}:{String(props.tableItem.timeleft%60).padStart(2, '0')}</div>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                    <div className="col">
                        <button className="bump" onClick={(event) => readyCard(event)} value={props.tableItem.docnumber}>Ready</button>
                        <button className="bump" onClick={(event) => bumpCard(event)} value={props.tableItem.docnumber}>Bump</button>
                    </div>                    
                </div>
            </div>
            <div>
                <div className="itemList">
                {
                    props.tableItem.items && props.tableItem.items.map((item, index) => (
                        <div>
                            <Item key={index} item={item}></Item>
                        </div>
                    ))
                }
                </div>
            <div className="row">
                    <div className="col rec">Received at: {props.tableItem.received}</div>
            </div>
            </div>  
        </div>
    );
}

export default Card;