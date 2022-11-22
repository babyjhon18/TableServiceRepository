import '../RowElement/RowElement.css'
import TableModifier from '../TableModifiers/TableModifier';


function RowElement(props){

    function bumpCard(event){
        removeObjectWithId(event.target.value);
    }

    function removeObjectWithId(id) {
        // const objWithIdIndex = chitList.findIndex((obj) => obj.docnumber === id);
        // chitList.splice(objWithIdIndex, 1);
        console.log(id);
    }

    if(props.NotHeader){
        return(
            <div className="mainRow row col-lg-12">
                <div className="col">
                    {props.tableItem.pid}
                </div>
                <div className="col">
                    {props.tableItem.tableno}
                </div>
                <div className="col">
                    {props.tableItem.docnumber}
                </div>
                <div className="col">
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
                <div className="col">
                    {props.tableItem.pid}
                </div>
                <div className="col">
                    {props.tableItem.tableno}
                </div>
                <div className="col">
                    {props.tableItem.docnumber}
                </div>
                <div className="col">
                    {props.tableItem.received}
                </div>
                <div className="col">
                    {props.tableItem.qty}
                </div>
                <div className="col-lg-3">
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