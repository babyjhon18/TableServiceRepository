import './App.css';
import StartMenu from '../StartMenu/StartMenu';
import TableView from '../TableView/TableView';
import CardView from '../CardView/CardView';
import { useEffect, useState } from 'react';

function App() {
   
  const [terminalID, setTerminalID] = useState();
  const [isChit, setIsChit] = useState();
  const [serviceIP, setServiceIP] = useState();

  useEffect(() => {
    setTerminalID(localStorage.getItem('terminalID'));
    setIsChit(localStorage.getItem('isChit'));
    setServiceIP(localStorage.getItem('serviceIP'))
  }, []);

  if(terminalID !== null && isChit !== null && serviceIP !== null){
    if(isChit === 'true'){
      return(
        <CardView></CardView>
      );
    }
    else{
      return(
        <TableView></TableView>
      );
    }
  }
  else{
    return (
      <StartMenu></StartMenu>
    );
  }
  
}

export default App;
