import React from 'react';
import s from './MainPhoto.module.css';

const MainPhoto = (props) => {
    return (
        <div className={s.wrapper}>
            <img src="https://i.pinimg.com/736x/6e/f6/8d/6ef68d5305c922edd1da3526965acc80--space-astronauts-vintage-space.jpg" />
        </div>
    )
}

export default MainPhoto;