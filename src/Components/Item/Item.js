import Mod from "../Mod/Mod";
import '../Item/Item.css'

function Item(props){
    return(
        <div>
            {props.item.status === 2 ? 
                <div>
                    <div className="mainReady">
                        <div className="itemName">
                            {props.item.name} 
                        </div>
                        <div className="itemQty">
                            Qty: {props.item.qty}
                        </div>
                    </div>
                    <div className="description">
                        {props.item.description} 
                    </div>
                </div>
                :
                <div>
                    <div className="mainNotReady">
                        <div className="itemName">
                            {props.item.name} 
                        </div>
                        <div className="itemQty">
                            Qty: {props.item.qty}
                        </div>
                    </div>
                    <div className="description">
                        {props.item.description} 
                    </div>
                </div>
            }
            <div>
                {
                    props.item.modifiers && props.item.modifiers.map((modifier, index) => (
                        <div>
                            <Mod key={index} modifier={modifier}></Mod>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Item;