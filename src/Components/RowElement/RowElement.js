import { useDispatch } from 'react-redux';
import { TABLE_BUMP_ITEM, PREPARATION_BUMP } from '../../Store/Constants';
import '../RowElement/RowElement.css'
import TableModifier from '../TableModifiers/TableModifier';


function RowElement(props){

    const dispatch = useDispatch();

    function bumpCard(event){
        removeObjectWithId(event.target.value);
    }

    function removeObjectWithId(id) {
        console.log(id);
        fetch("http://" + localStorage.getItem('serviceIP') + PREPARATION_BUMP + id)
        .then(result => {
            dispatch({type: TABLE_BUMP_ITEM, payload: id})
        });
    }

    if(props.NotHeader){
        return(
            <div className="mainRow row col-lg-12">
                <div className="col-1">
                    {props.tableItem.pid}
                </div>
                <div className="col-1">
                    {props.tableItem.tableno}
                </div>
                <div className="col-1">
                    {props.tableItem.docnumber}
                </div>
                <div className="col-1">
                    {props.tableItem.received}
                </div>
                <div className="col">
                    {props.tableItem.qty}
                </div>
                <div className="col-lg-3">
                    {props.tableItem.name}
                </div>
                <div className="col-lg-3">
                    {props.tableItem.modifiers}
                </div>
                <div className="col"></div>
            </div>
        );
    }
    else{
        return(
            <div className="mainRow row col-lg-12">
                <div className="col-1">
                    {props.tableItem.pid}
                </div>
                <div className="col-1">
                    {props.tableItem.tableno}
                </div>
                <div className="col-1">
                    {props.tableItem.docnumber}
                </div>
                <div className="col-1">
                    {props.tableItem.received}
                </div>
                <div className="col">
                    {props.tableItem.qty}
                </div>
                <div className="col-lg-3 itemName">
                    {props.tableItem.name}
                </div>
                <div className="col-lg-3">
                    {props.tableItem.modifiers && props.tableItem.modifiers.map((item, index) => (
                        <TableModifier key={index} modifier={item}></TableModifier> 
                    ))}
                </div>
                <div className="col bump">
                    <button onClick={(event) => bumpCard(event)} value={props.tableItem.id}>Bump</button>
                </div>    
            </div>
        );
    }
}   

export default RowElement; 