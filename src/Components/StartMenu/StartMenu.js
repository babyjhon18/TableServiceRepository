import { useEffect } from 'react';
import { useState } from 'react';
import '..//StartMenu//StartMenu.css'

function StartMenu(){

    useEffect(() => {

    },[])
    
    const [terminalID, setTerminalID] = useState();
    const [isChit, setIsChit] = useState();
    const [serviceIP, setServiceIP] = useState();

    const handleChangeInput = (event) => {
        const target = event.target;
        switch(target.name){
            case 'terminal':
                setTerminalID(target.value);
                break;
            case 'chit':
                setIsChit(target.checked);
                break;
            case 'serviceIP':
                setServiceIP(target.value);
                break;
        }
    }

    const saveButtonClick = () => {
        localStorage.setItem('terminalID', terminalID);
        localStorage.setItem('isChit', isChit);
        localStorage.setItem('serviceIP', serviceIP);
    }

    return(<div className="startMenuMain">
            <div className="inputMenuItem">
                <label>Terminal ID</label>
                <input name='terminal' type={"text"} placeholder="Enter terminal ID" onChange={handleChangeInput}></input>
            </div>
            <div className="inputMenuItem">
                <label>Is chit</label>
                <input name='chit' type={"checkbox"} onChange={handleChangeInput}></input>
            </div>
            <div className="inputMenuItem">
                <label>Service IP</label>
                <input name='serviceIP' type={"text"} placeholder="Enter server IP" onChange={handleChangeInput}></input>
            </div>
            <div>
                <button onClick={saveButtonClick}>Save</button>
            </div>
        </div>
    );
}

export default StartMenu;