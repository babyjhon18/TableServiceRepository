import { useEffect, useState } from "react";
import RowElement from "../RowElement/RowElement";
import { rowHeader } from '../../Store/Constants'
import '../TableView/TableView.css'
import { useDispatch, useSelector } from 'react-redux';
import { TABLE_VIEW, PREPARATION_UPDATE} from '../../Store/Constants'
import InfoComponent from "../InfoComponent/InfoComponent";

function TableView(){

    const [firstStart, setFirstStart] = useState(true);
    const [playAudio, setPlayAudio] = useState(false);
    const dispatch = useDispatch();
    const table = useSelector(state => state.tableViewReduser);
    const login = useSelector(state => state.loginReduser)

    function fetchData(){
        setPlayAudio(false)
        if(firstStart){
            setFirstStart(false);
        };
        fetch("http://" + window.SERVER_IP + PREPARATION_UPDATE + login.terminalID)
        .then(response => response.json())
        .then(result => {
            if(result.length != 0){
                setPlayAudio(true);
            }
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
            <InfoComponent name="table"></InfoComponent>
            <div className="rowHeader row">
                <RowElement tableItem={rowHeader} NotHeader={true}></RowElement>
            </div>
            {   
                playAudio ? (
                    <audio src={window.AUDIO_FILE} autoPlay={true}></audio>
                ) : <></>
            }
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