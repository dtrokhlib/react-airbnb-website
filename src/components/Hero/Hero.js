import React from 'react';
import './Hero.css';

import Image1 from './assets/Image1.png';
import Image2 from './assets/Image2.png';
import Image3 from './assets/Image3.png';
import Image4 from './assets/Image4.png';
import Image5 from './assets/Image5.png';
import Image6 from './assets/Image6.png';
import Image7 from './assets/Image7.png';
import Image8 from './assets/Image8.png';
import Image9 from './assets/Image9.png';

export function Hero() {
    return (
        <div className='imageGalery'>
            <div className='container'>
                <div className='container--column'>
                    <img src={Image1} alt='Image1' />
                </div>
                <div className='container--column'>
                    <img src={Image2} alt='Image2' />
                    <img src={Image3} alt='Image3' />
                </div>
                <div className='container--column'>
                    <img src={Image4} alt='Image4' />
                    <img src={Image5} alt='Image5' />
                </div>
                <div className='container--column'>
                    <img src={Image6} alt='Image6' />
                    <img src={Image7} alt='Image7' />
                </div>
                <div className='container--column'>
                    <img src={Image8} alt='Image8' />
                    <img src={Image9} alt='Image9' />
                </div>
                <div className='container--column'>
                    <img src={Image1} alt='Image1' />
                </div>
            </div>
            <div className='imageGalery--info'>
                <h1 className='imageGalery--info__headline'>
                    Online Experiences
                </h1>
                <h4 className='imageGalery--info__description'>
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </h4>
            </div>
        </div>
    );
}
