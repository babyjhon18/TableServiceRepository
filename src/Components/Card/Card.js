import Item from "../Item/Item";
import '../Card/Card.css'

function Card(props){
    return(
        <div>
            <div>
                <div className="row">
                    <div className="col-lg doc textAttributes">Doc#{props.tableItem.docnumber}</div>
                    <div className="col-lg table textAttributes">Table#{props.tableItem.tableno}</div>
                    <button className="col-lg">Bump</button>
                </div>
                <div>
                    <div className="itemList">
                    {
                        props.tableItem.items && props.tableItem.items.map((item, index) => (
                            <div>
                                <Item key={index} item={item}></Item>
                            </div>
                        ))
                    }
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Card;