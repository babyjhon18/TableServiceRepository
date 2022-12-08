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
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                        {props.tableItem.pid}
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                        {props.tableItem.tableno}
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                        {props.tableItem.docnumber}
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                        {props.tableItem.received}
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                        {props.tableItem.qty}
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 col-xl-3" style={{minWidth: "300px"}}>
                        {props.tableItem.name}
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 col-xl-3" style={{minWidth: "300px"}}>
                        {props.tableItem.modifiers}
                    </div>
                    <div className="col" style={{minWidth: "100px"}}></div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="mainRow row col-lg-12">
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                    {props.tableItem.pid}
                </div>
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                    {props.tableItem.tableno}
                </div>
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                    {props.tableItem.docnumber}
                </div>
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                    {props.tableItem.received}
                </div>
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                    {props.tableItem.qty}
                </div>
                <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 col-xl-3 itemName" style={{minWidth: "300px"}}>
                    {props.tableItem.name}
                    <br></br>
                    <div className='description'>{props.tableItem.description}</div>
                </div>
                <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 col-xl-3" style={{minWidth: "300px"}}>
                    {props.tableItem.modifiers && props.tableItem.modifiers.map((item, index) => (
                        <TableModifier key={index} modifier={item}></TableModifier> 
                    ))}
                </div>
                <div className="col bump" style={{minWidth: "100px"}}>
                    <button onClick={(event) => bumpCard(event, props.tableItem)} value={props.tableItem}>Bump</button>
                </div>    
            </div>
        );
    }
}   

export default RowElement; 