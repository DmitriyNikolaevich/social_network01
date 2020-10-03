import React from 'react';
import s from './BackPhoto.module.css';

const BackPhoto = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.photo}>
                <img src='https://get.wallhere.com/photo/1920x1080-px-astronomy-colorful-colors-cosmos-galaxies-galaxy-nature-planet-planets-sky-space-star-stars-universe-1732769.jpg' />
            </div>
        </div>
    )
}

export default BackPhoto;