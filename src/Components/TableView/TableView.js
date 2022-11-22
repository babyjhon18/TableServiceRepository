import { useEffect, useState } from "react";
import RowElement from "../RowElement/RowElement";
import data from '..//..//preparation.json';
import { rowHeader } from '../../Store/Constants'
import '../TableView/TableView.css'
import { useDispatch, useSelector } from 'react-redux';
import { TABLE_VIEW, PREPARATION_UPDATE} from '../../Store/Constants'
import axios from 'axios'

function TableView(){

    const[tableItems, setTableItems] = useState();
    const dispatch = useDispatch();
    const table = useSelector(state => state.tableViewReduser);

    useEffect(() => {
        fetch("http://" + localStorage.getItem('serviceIP') + PREPARATION_UPDATE + localStorage.getItem('terminalID'))
        .then(response => response.json())
        .then(result => {
            console.log(result);
            dispatch({type: TABLE_VIEW, payload: result});
            setTableItems(result)
        });
        setInterval(() => {
            fetch("http://" + localStorage.getItem('serviceIP') + PREPARATION_UPDATE + localStorage.getItem('terminalID'))
            .then(response => response.json())
            .then(result => {
                console.log(result);
                dispatch({type: TABLE_VIEW, payload: result});
                setTableItems(result)
            });
        }, 15000);
    }, [table])

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