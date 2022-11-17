import Mod from "../Mod/Mod";

function Item(props){
    return(
        <div>
            <div className="itemName">
                Item
            </div>
            {/* mods */}<Mod></Mod>
        </div>
    );
}

export default Item;