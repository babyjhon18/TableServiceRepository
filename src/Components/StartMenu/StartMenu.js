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

    return(<div className="startMenu"> 
            <div className="row rowMain">
                <span className='col-lg'>Terminal ID</span>
                <div className='col-lg'>
                    <input className='col-lg' name='terminal' type={"text"} placeholder="Enter terminal ID" onChange={handleChangeInput}></input>
                </div>
            </div>
            <div className="row rowMain">
                <label className='col-lg'>Is chit</label>
                <div className='col-lg'>
                    <input name='chit' type={"checkbox"} onChange={handleChangeInput}></input>
                </div>
            </div>
            <div className="row rowMain">
                <span className='col-lg'>Service IP & PORT</span>
                <div className='col-lg'>
                    <input name='serviceIP' type={"text"} placeholder="Enter server IP and Port" onChange={handleChangeInput}></input>
                </div>
            </div>
            <div className='col-lg'>
                <button onClick={saveButtonClick}>Save</button>
            </div>
        </div>
    );
}

export default StartMenu;