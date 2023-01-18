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
        return(<div className='row'>
                <div className="mainRow row col-lg-12">
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "80px", maxWidth: "150px"}}>
                        {props.tableItem.received}
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "60px", maxWidth: "150px"}}>
                        {props.tableItem.tableno}
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                        {props.tableItem.docnumber}
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "50px", maxWidth: "50px"}}>
                        {props.tableItem.qty}
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 col-xl-3" style={{minWidth: "150px", maxWidth: "400px"}}>
                        {props.tableItem.name}
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 col-xl-3" style={{minWidth: "100px", maxWidth: "550px"}}>
                        {props.tableItem.modifiers}
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "50px", maxWidth: "100px"}}></div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="mainRow row col-lg-12">
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "80px", maxWidth: "150px"}}>
                    {props.tableItem.received}
                </div>
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "60px", maxWidth: "150px"}}>
                    {props.tableItem.tableno}
                </div>
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "100px"}}>
                    {
                        props.tableItem.ponum !== "" ?
                        <div>
                            <div>{props.tableItem.docnumber}</div>
                            <div>{props.tableItem.ponum}</div>
                        </div>
                        :
                        <div>{props.tableItem.docnumber}</div>
                    }
                </div>
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1" style={{minWidth: "50px", maxWidth: "50px"}}>
                    {props.tableItem.qty}
                </div>
                <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 col-xl-3 itemName" style={{minWidth: "150px", maxWidth: "400px"}}>
                    {props.tableItem.name}
                    <br></br>
                    <div className='description'>{props.tableItem.description}</div>
                </div>
                <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 col-xl-3" style={{minWidth: "100px", maxWidth: "550px"}}>
                    {props.tableItem.modifiers && props.tableItem.modifiers.map((item, index) => (
                        <TableModifier key={index} modifier={item}></TableModifier> 
                    ))}
                </div>
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1 col-xl-1 bump" style={{minWidth: "50px", maxWidth: "100px"}}>
                    <button onClick={(event) => bumpCard(event, props.tableItem)} value={props.tableItem}>Bump</button>
                </div>    
            </div>
        );
    }
}   

export default RowElement; 