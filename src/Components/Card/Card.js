import Item from "../Item/Item";
import '../Card/Card.css';
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_CARD_VIEW } from "../../Store/Constants";

function Card(props){

    const cards = useSelector(state => state.cardViewReduser);
    const dispatch = useDispatch(); 

    function bumpCard(event){
        removeObjectWithId(event.target.value);
    }

    function removeObjectWithId(id) {
        dispatch({type: UPDATE_CARD_VIEW, payload: id})
    }

    return(
        <div>
            <div className="mainHeader">
                <div className="Header">
                    <div className="col doc">Doc#:<br />
                    <div className="docValue">{props.tableItem.docnumber}</div></div>
                    <div className="col tabl">Table#:<br />
                    <div className="tablValue">{props.tableItem.tableno}</div></div>
                    <button className="col bump" onClick={(event) => bumpCard(event)} value={props.tableItem.docnumber}>Bump</button>
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
                <div className="rec">Received at {props.tableItem.received}</div>
            </div>  
        </div>
    );
}

export default Card;