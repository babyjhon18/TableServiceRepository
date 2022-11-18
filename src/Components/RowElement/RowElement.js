function RowElement(props){
    return(
        <div>
            <div>
                {props.tableItem.ID}
            </div>
            <div>
                {props.tableItem.tableNum}
            </div>
            <div>
                {props.tableItem.documber}
            </div>
            <div>
                {props.tableItem.quantity}
            </div>
            <div>
                {props.tableItem.itemName}
            </div>
            <div>
                {props.tableItem.received}
            </div>
        </div>
    );
}   

export default RowElement; 