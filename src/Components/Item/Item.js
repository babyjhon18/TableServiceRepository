import Mod from "../Mod/Mod";
import '../Item/Item.css'

function Item(props){
    return(
        <div>
            <div className="itemName">
                {props.item.name}
            </div>
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