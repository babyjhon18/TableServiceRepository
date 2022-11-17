import Item from "../Item/Item";

function Card(){
    return(
        <div>
            <div className="flex">
                <div>Doc#</div>
                <div>Table#</div>
            </div>
            <Item></Item>
        </div>
    );
}

export default Card;