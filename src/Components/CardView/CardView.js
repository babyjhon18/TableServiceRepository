import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import data from '../../chit.json'
import '../CardView/CardView.css'

function CardView(){

    const[cardItems, setCardItems] = useState();

    useEffect(() => {
        setCardItems(data)
    }, [data])

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