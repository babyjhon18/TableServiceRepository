import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import data from '../../chit.json'
import '../CardView/CardView.css'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CARD, CARD_VIEW, CHIT_UPDATE} from '../../Store/Constants'
import axios from 'axios'

function CardView(){

    const dispatch = useDispatch();
    const[cardItems, setCardItems] = useState();
    const cards = useSelector(state => state.cardViewReduser);

    useEffect(() => {
        fetch("http://" + localStorage.getItem('serviceIP') + CHIT_UPDATE + localStorage.getItem('terminalID'))
        .then(response => response.json())
        .then(result => {
            console.log(result);
            dispatch({type: CARD_VIEW, payload: result});
            setCardItems(result)
        });
        setInterval(() => {
            fetch("http://" + localStorage.getItem('serviceIP') + CHIT_UPDATE + localStorage.getItem('terminalID'))
            .then(response => response.json())
            .then(result => {
                console.log(result);
                dispatch({type: ADD_CARD, payload: result});
                setCardItems(result)
            });
        }, 15000);
    }, [cards])

    return(
        <div>
            <div className='cardList'>
                {cardItems && cardItems.map((tableItem, index) =>
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