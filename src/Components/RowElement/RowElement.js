import '../RowElement/RowElement.css'
import TableModifier from '../TableModifiers/TableModifier';


function RowElement(props){
    if(props.NotHeader){
        return(
            <div className="mainRow row">
                <div className="col-lg">
                    {props.tableItem.id}
                </div>
                <div className="col-lg">
                    {props.tableItem.tableno}
                </div>
                <div className="col-lg">
                    {props.tableItem.docnumber}
                </div>
                <div className="col-lg">
                    {props.tableItem.qty}
                </div>
                <div className="col-lg">
                    {props.tableItem.name}
                </div>
                <div className="col-lg">
                    {props.tableItem.modifiers}
                </div>
                <div className="col-lg">
                    {props.tableItem.received}
                </div>
                <div className="col-lg"></div>       
            </div>
        );
    }
    else{
        return(
            <div className="mainRow row">
                <div className="col-lg">
                    {props.tableItem.id}
                </div>
                <div className="col-lg">
                    {props.tableItem.tableno}
                </div>
                <div className="col-lg">
                    {props.tableItem.docnumber}
                </div>
                <div className="col-lg">
                    {props.tableItem.qty}
                </div>
                <div className="col-lg">
                    {props.tableItem.name}
                </div>
                <div className="col-lg">
                    {props.tableItem.modifiers && props.tableItem.modifiers.map((item, index) => (
                        <TableModifier key={index} modifier={item}></TableModifier> 
                    ))}
                </div>
                <div className="col-lg">
                    {props.tableItem.received}
                </div>
                <button className="col-lg bump">Bump</button>            
            </div>
        );
    }
}   

export default RowElement; 