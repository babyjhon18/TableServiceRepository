import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import '../CardView/CardView.css'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CARD, CHIT_UPDATE, SET_PLAY_AUDIO, UPDATE_CARD_VIEW, UPDATE_TIMER_CARD} from '../../Store/Constants'
import InfoComponent from '../InfoComponent/InfoComponent';

function CardView(){

    const [firstStart, setFirstStart] = useState(true);
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cardViewReduser);
    const login = useSelector(state => state.loginReduser);

    function fetchData(){
        if(firstStart){
            setFirstStart(false);
        };
        fetch("http://" + window.SERVER_IP + CHIT_UPDATE + login.terminalID)
        .then(response => response.json())
        .then(result => {
            dispatch({type: SET_PLAY_AUDIO});
            if (result.length > 0){
                result.map((card) => {
                    dispatch({type: UPDATE_CARD_VIEW, payload: card});
                })
            }
        });
    }

    useEffect(() => {
        if (firstStart) {
            fetchData();
            setInterval(() => {
                console.log(15);
                fetchData();
            }, 15000); 
            setInterval(() => {
                dispatch({type: UPDATE_TIMER_CARD });
            }, 1000)
        }       
    }, [cards])

    return(
        <div className='container-fluid'>
            <InfoComponent name="card"></InfoComponent>
            {   
                cards.playAudio ? (
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