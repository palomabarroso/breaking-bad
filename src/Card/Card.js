import React from 'react';
import './Card.css';
//import star from './star.svg';

const Card = ({ cardItem }) => {
    return (
        <div key={cardItem.char_id} className='card-item'  >
            <img src={cardItem.img} alt="" />
            <div className={`card-status ${cardItem.status === `Alive` ? `character-live` : 'character-dead'}`}>
                <p>{cardItem.status}</p>
            </div>
            <div className='card-info'>
                <h3>{cardItem.name}</h3>
                <p>{cardItem.birthday}</p>
                <p>{cardItem.occupation}</p>
            </div>
        </div>
    )
}
export default Card;