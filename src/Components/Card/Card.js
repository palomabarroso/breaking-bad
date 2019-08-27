import React, { Component } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
//import star from './star.svg';

class Card extends Component {
    render() {
        const {
            img,
            status,
            name,
            occupation,
            birthday
        } = this.props.cardItem;

        return (
            <div className='cardItem' >
                <div className='imgBackground' style={{ backgroundImage: "url(" + img + ") " }}></div>
                <div className={`cardStatus ${status === `Alive` ? `characterLive` : 'characterDead'}`}>
                    <p>{status}</p>
                </div>
                <div className='cardInfo'>
                    <h3>{name}</h3>
                    <div className='labelIcon'>
                        <FontAwesomeIcon icon={faStar} />
                        <p>{birthday}</p>
                    </div>
                    <p>{occupation}</p>
                </div>
            </div>
        )
    }
}
export default Card;