import React from 'react';
import Photo from './Photo/Photo';
import s from './Photos.module.css';

const Photos = (props) => {
    return (
        <div>
            <div className={s.header}>
                <h1>
                    My photos
                </h1>
            </div>
        <div className={s.wrapper}>
            <div>
                <Photo />
            </div>
            <div>
                <Photo />
            </div>
            <div>
                <Photo />
            </div>
            <div>
                <Photo />
            </div>
            <div>
                <Photo />
            </div>
            
        </div>
        </div>
    )
}

export default Photos;