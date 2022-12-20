import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import '../CardView/CardView.css'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CARD, CHIT_UPDATE, UPDATE_CARD_VIEW} from '../../Store/Constants'
import InfoComponent from '../InfoComponent/InfoComponent';

function CardView(){

    const [playAudio, setPlayAudio] = useState(false);
    const [firstStart, setFirstStart] = useState(true);
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cardViewReduser);
    const login = useSelector(state => state.loginReduser);

    function fetchData(){
        setPlayAudio(false);
        if(firstStart){
            setFirstStart(false);
        };
        fetch("http://" + window.SERVER_IP + CHIT_UPDATE + login.terminalID)
        .then(response => response.json())
        .then(result => {
            var hasNewCard = false;
            if (result.length > 0){
                result.map((card) => {
                    if(!cards.cards.find(excard => excard.docnumber === card.docnumber)){
                        hasNewCard = true;
                    }
                    dispatch({type: UPDATE_CARD_VIEW, payload: card});
                })
            }
            setPlayAudio(hasNewCard);
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
    }, [cards])

    return(
        <div className='container-fluid'>
            <InfoComponent name="card"></InfoComponent>
            {   
                playAudio ? (
                    <audio src={window.AUDIO_FILE}  autoPlay={true}></audio>
                ) : <></>
            }
            <div className='cardList'>
                {cards.cards && cards.cards.map((tableItem, index) =>
                    (
                        <div className="item">
                            <Card key={index} tableItem={tableItem}></Card>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default CardView;