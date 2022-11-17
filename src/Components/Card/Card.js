import Item from "../Item/Item";

function Card(props){
    return(
        <div>
            <div className="flex">
                <div>Doc#{props.tableItem.doc}</div>
                <div>Table#{props.tableItem.table}</div>
                {
                    props.tableItem.items && props.tableItem.items.map((item, index) => (
                        console.log(item),
                        <div>
                            <Item key={index} item={item}></Item>
                        </div>
                    ))
                }
                <button>Bump</button>
            </div>
        </div>
    );
}

export default Card;