import '../TableModifiers/TableModifier.css'

function TableModifier(props){
    return(
        <div className="mainDivMod row">
        <div className="col-lg">
            {props.modifier.name} - {props.modifier.qty}
        </div>
    </div>
    );
}

export default TableModifier;