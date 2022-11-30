import '../TableModifiers/TableModifier.css'

function TableModifier(props){
    return(
        <div className="mainDivMod row">
            {
                props.modifier.without < 0 ? 
                <div className="col-lg without">
                    {props.modifier.name}  {/* - {props.modifier.qty} */}
                </div>
                :
                <div className="col-lg">
                    {props.modifier.name}  {/* - {props.modifier.qty} */}
                </div>
            }
        
    </div>
    );
}

export default TableModifier;