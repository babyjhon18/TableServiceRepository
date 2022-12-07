import { useEffect, useState } from 'react';
import '..//StartMenu//StartMenu.css'
import { LOGIN, LOG_IN } from '../../Store/Constants'
import { useDispatch, useSelector } from 'react-redux';

function StartMenu(){

    useEffect(() => {
        setServiceIP(window.SERVER_IP);
        async function fetchData() {
            const repsonse= await fetch("http://" + window.SERVER_IP);
            const result = await repsonse.json();
            setTerminals(result);
        }
        fetchData();
    }, []);

    const login = useSelector(state => state.loginReduser)
    const dispatch = useDispatch();
    const [terminalID, setTerminalID] = useState();
    const [serviceIP, setServiceIP] = useState();
    const [TerminalList, setTerminals] = useState([]);

    const saveButtonClick = () => {
        fetch("http://" + window.SERVER_IP + LOGIN + terminalID)
        .then(response => response.json())
        .then(result => {
            dispatch({type: LOG_IN, payload: { 
                isChit: result.ischit, terminalDescription: result.description, terminalID: result.id, serviceIP: serviceIP
            }});
        });
    }

    const selectChange = (event) => {
        setTerminalID(event.target.value);
    }

    return(<div className='startMenu'> 
            <div className='rowMain'>
                <div className='col'>Terminal: </div>
                <div className='col'>
                    <select onChange={selectChange}>
                        <option selected="" value="0"></option>
                        {
                            TerminalList.map((item, index) => (
                                <option key={index} value={item.code}>{item.code} - {item.name}</option> 
                            ))
                        }
                    </select>
                </div>
                
            </div>
            <div>
                <button className='logIn' onClick={saveButtonClick}>Log in</button>
            </div>  
        </div>
    );
}

export default StartMenu;