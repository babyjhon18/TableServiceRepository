import { useEffect, useState } from "react";
import RowElement from "../RowElement/RowElement";
import { rowHeader } from '../../Store/Constants'
import '../TableView/TableView.css'
import { useDispatch, useSelector } from 'react-redux';
import { TABLE_VIEW, PREPARATION_UPDATE} from '../../Store/Constants'

function TableView(){

    const [firstStart, setFirstStart] = useState(true);
    const dispatch = useDispatch();
    const table = useSelector(state => state.tableViewReduser);

    function fetchData(){
        if(firstStart){
            setFirstStart(false);
        };
        fetch("http://" + localStorage.getItem('serviceIP') + PREPARATION_UPDATE + localStorage.getItem('terminalID'))
        .then(response => response.json())
        .then(result => {
            dispatch({type: TABLE_VIEW, payload: result});
        });
    }

    useEffect(() => {
        if (firstStart) {
            fetchData();
            setInterval(() => {
                console.log(15);
                fetchData();
            }, 15000); 
        }      
    }, [table])

    return(
        <div className="container-fluid">
            <div className="rowHeader row">
                <RowElement tableItem={rowHeader} NotHeader={true}></RowElement>
            </div>
            <div className="rowElements">
                {table.table && table.table.map((item, index) => (
                    <div className="row element">
                        <RowElement  key={index} tableItem={item} NotHeader={false}></RowElement>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TableView;