import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import '../CardView/CardView.css'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CARD, CHIT_UPDATE, UPDATE_CARD_VIEW} from '../../Store/Constants'

function CardView(){

    const [firstStart, setFirstStart] = useState(true);
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cardViewReduser);

    function fetchData(){
        if(firstStart){
            setFirstStart(false);
        };
        fetch("http://" + localStorage.getItem('serviceIP') + CHIT_UPDATE + localStorage.getItem('terminalID'))
        .then(response => response.json())
        .then(result => {
            if (result.length > 0){
                result.map((card) => {
                    card.items.every(item => {
                        if(item.status === 0){
                            dispatch({type: ADD_CARD, payload: card});
                        }
                        else{
                            dispatch({type: UPDATE_CARD_VIEW, payload: { 
                                docnumber: card.docnumber, id: item.id, itemStatus: item.status  
                            }});
                        }
                    })
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
        }       
    }, [cards])

    return(
        <div>
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