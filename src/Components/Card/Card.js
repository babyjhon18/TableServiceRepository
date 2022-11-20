import Item from "../Item/Item";
import '../Card/Card.css';
import chitList from '../../chit.json';

function Card(props){

    function bumpCard(event){
        removeObjectWithId(event.target.value);
    }

    function removeObjectWithId(id) {
        // const objWithIdIndex = chitList.findIndex((obj) => obj.docnumber === id);
        // chitList.splice(objWithIdIndex, 1);
        console.log(id);
      }

    return(
        <div>
            <div className="mainHeader">
                <div className="Header">
                    <div className="col-lg doc">Doc#{props.tableItem.docnumber}</div>
                    <div className="col-lg tabl">Table#{props.tableItem.tableno}</div>
                    <button className="col-lg bump" onClick={(event) => bumpCard(event)} value={props.tableItem.docnumber}>Bump</button>
                </div>
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
                <div className="rec">Received at {props.tableItem.received}</div>
            </div>  
        </div>
    );
}

export default Card;