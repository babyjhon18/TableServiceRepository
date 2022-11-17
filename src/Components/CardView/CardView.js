import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import data from '../../dataFile.json'

function CardView(){

    const[cardItems, setCardItems] = useState();

    useEffect(() => {
        setCardItems(data.tables)
    }, [data.tables])

    return(
        <div>
            <div>
                {cardItems && cardItems.map((tableItem, index) =>
                    (
                        <div className='row'>
                            <Card key={index} tableItem={tableItem}></Card>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default CardView;