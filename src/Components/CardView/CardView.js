import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import data from '../../chit.json'
import '../CardView/CardView.css'
import { useDispatch, useSelector } from 'react-redux';
import { CARD_VIEW } from '../../Store/Constants'

function CardView(){

    const dispatch = useDispatch();
    const[cardItems, setCardItems] = useState();
    const cards = useSelector(state => state.cardViewReduser);

    useEffect(() => {
        setCardItems(cards);
        dispatch({type: CARD_VIEW, payload: data});
        setInterval(() => {
            setCardItems(cards);
            dispatch({type: CARD_VIEW, payload: data});
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