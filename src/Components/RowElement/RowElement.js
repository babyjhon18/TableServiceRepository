import { useDispatch } from 'react-redux';
import { TABLE_BUMP_ITEM, PREPARATION_BUMP } from '../../Store/Constants';
import '../RowElement/RowElement.css'
import TableModifier from '../TableModifiers/TableModifier';

function RowElement(props){

    const dispatch = useDispatch();

    function bumpCard(event, value){
        removeObjectWithId(event.target.value, value);
    }

    function removeObjectWithId(value, valueOfRow) {
        console.log(valueOfRow.id);
        console.log(valueOfRow.docnumber);
        console.log(valueOfRow.pid);
        fetch("http://" + window.SERVER_IP + PREPARATION_BUMP +
        valueOfRow.pid + "&docnumber=" + valueOfRow.docnumber + "&id=" + valueOfRow.id)
        .then(result => {
            dispatch({type: TABLE_BUMP_ITEM, payload: valueOfRow.id})
        });
    }

    if(props.NotHeader){
        return(<div>
                <div className="mainRow row col-lg-12">
                    <div className="col-lg-1">
                        {props.tableItem.pid}
                    </div>
                    <div className="col-lg-1">
                        {props.tableItem.tableno}
                    </div>
                    <div className="col-lg-1">
                        {props.tableItem.docnumber}
                    </div>
                    <div className="col-lg-1">
                        {props.tableItem.received}
                    </div>
                    <div className="col-lg-1">
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
            </div>
        );
    }
    else{
        return(
            <div className="mainRow row col-lg-12">
                <div className="col-lg-1">
                    {props.tableItem.pid}
                </div>
                <div className="col-lg-1">
                    {props.tableItem.tableno}
                </div>
                <div className="col-lg-1">
                    {props.tableItem.docnumber}
                </div>
                <div className="col-lg-1">
                    {props.tableItem.received}
                </div>
                <div className="col-lg-1">
                    {props.tableItem.qty}
                </div>
                <div className="col-lg-3 itemName">
                    {props.tableItem.name}
                    <br></br>
                    <div className='description'>{props.tableItem.description}</div>
                </div>
                <div className="col-lg-3">
                    {props.tableItem.modifiers && props.tableItem.modifiers.map((item, index) => (
                        <TableModifier key={index} modifier={item}></TableModifier> 
                    ))}
                </div>
                <div className="col bump">
                    <button onClick={(event) => bumpCard(event, props.tableItem)} value={props.tableItem}>Bump</button>
                </div>    
            </div>
        );
    }
}   

export default RowElement; 