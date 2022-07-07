import React from 'react';
import './Card.css';
import star from './assets/star.png';

export function Card({ card }) {
    return (
        <div className='card--item'>
            {card.status && <div className='card--status'>{card.status}</div>}
            <img
                className='card--item__image'
                src={card.image.src}
                alt={card.image.alt}
            />
            <div className='card--item__info'>
                <div className='card--item__info--rating'>
                    <img src={star} alt='Star' />
                    <span> {card.rating.mark} </span>
                    <span className='card--item__info--rating__grey'>
                        ({card.rating.totalReviews}) &#183; {card.country}
                    </span>
                </div>
                <div className='card--item__info--title'>
                    <span>{card.title}</span>
                </div>
                <div className='card--item__info--price'>
                    <span>
                        <strong>From {card.price}</strong> / person
                    </span>
                </div>
            </div>
        </div>
    );
}
