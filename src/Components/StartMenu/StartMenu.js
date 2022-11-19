import { useEffect } from 'react';
import '..//StartMenu//StartMenu.css'

function StartMenu(){

    useEffect(() => {

    },[])

    return(<div className="startMenuMain">
            <div className="inputMenuItem">
                <label>Terminal ID</label>
                <input type={"text"} placeholder="Enter terminal ID"></input>
            </div>
            <div className="inputMenuItem">
                <label>Is chit</label>
                <input type={"checkbox"}></input>
            </div>
            <div className="inputMenuItem">
                <label>Service IP</label>
                <input type={"text"} placeholder="Enter server IP"></input>
            </div>
            <div>
                <button>Save</button>
            </div>
        </div>
    );
}

export default StartMenu;