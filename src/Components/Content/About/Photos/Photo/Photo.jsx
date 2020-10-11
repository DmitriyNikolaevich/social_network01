import React from 'react';
import s from './Photo.module.css';

const Photo = (props) => {
    return (
        <div className={s.wrapper}>
            <img src='https://i.imgur.com/mT0XMxX.jpg' />
        </div>
    )
}

export default Photo;