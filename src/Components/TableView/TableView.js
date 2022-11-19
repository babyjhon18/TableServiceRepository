import { useEffect, useState } from "react";
import RowElement from "../RowElement/RowElement";
import data from '..//..//preparation.json';
import { rowHeader } from '../../Store/Constants'
import '../TableView/TableView.css'

function TableView(){

    const[tableItems, setTableItems] = useState();

    useEffect(() => {
        setTableItems(data);
        console.log(data)
    }, [data])

    return(
        <div className="mainTable container-fluid">
            <div className="rowHeader row">
                <RowElement tableItem={rowHeader} NotHeader={true}></RowElement>
            </div>
            <div className="rowElements">
                {tableItems && tableItems.map((item, index) => (
                    <div className="row element">
                        <RowElement  key={index} tableItem={item} NotHeader={false}></RowElement>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TableView;