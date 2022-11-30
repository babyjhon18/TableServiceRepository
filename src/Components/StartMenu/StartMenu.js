import { useState } from 'react';
import '..//StartMenu//StartMenu.css'
import { LOGIN, LOG_IN } from '../../Store/Constants'
import { useDispatch, useSelector } from 'react-redux';

function StartMenu(){

    const login = useSelector(state => state.loginReduser)
    const dispatch = useDispatch();
    const [terminalID, setTerminalID] = useState();
    const [serviceIP, setServiceIP] = useState();

    const handleChangeInput = (event) => {
        const target = event.target;
        switch(target.name){
            case 'terminal':
                setTerminalID(target.value);
                break;
            case 'serviceIP':
                setServiceIP(target.value);
                break;
        }
    }

    const saveButtonClick = () => {
        localStorage.setItem('terminalID', terminalID);
        localStorage.setItem('serviceIP', serviceIP);
        fetch("http://" + serviceIP + LOGIN + terminalID)
        .then(response => response.json())
        .then(result => {
            dispatch({type: LOG_IN, payload: { 
                isChit: result.ischit, terminalDescription: result.description, terminalID: result.id, serviceIP: serviceIP
            }});
        });
        window.location.reload(false);
    }

    return(<div className="startMenu"> 
            <div className="row rowMain">
                <span className='col-lg'>Terminal ID</span>
                <div className='col-lg'>
                    <input className='col-lg' name='terminal' type={"text"} placeholder="Enter terminal ID" onChange={handleChangeInput}></input>
                </div>
            </div>
            <div className="row rowMain">
                <span className='col-lg'>Service IP & PORT</span>
                <div className='col-lg'>
                    <input className='col-lg' name='serviceIP' type={"text"} placeholder="Enter server IP and Port" onChange={handleChangeInput}></input>
                </div>
            </div>
            <div className='row rowMain'>
                <button onClick={saveButtonClick}>Log in</button>
            </div>
        </div>
    );
}

export default StartMenu;