import { useEffect, useState } from "react";
import RowElement from "../RowElement/RowElement";
import data from '..//..//dataFile.json'

function TableView(){

    const[tableItems, setTableItems] = useState();

    useEffect(() => {
        setTableItems(data.table)
    }, [data.table])

    return(
        <div>
            <div>
                <RowElement ></RowElement>
            </div>
            <div>
                {tableItems && tableItems.map((item, index) => (
                    <div>
                        <RowElement key={index} tableItem={item}></RowElement>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TableView;