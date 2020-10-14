import React from 'react';
import s from './FavoriteSports.module.css';
import Sport from './Sport/Sport';

const FavoriteSports = (props) => {
    return (
        <div className={s.main}>
            <div className={s.header}>
                <h1>
                    Favorite Sport
                </h1>
            </div>
            <div className={s.wrapper}>
                <div>
                    <Sport />
                </div>
                <div>
                    <Sport />
                </div>
                <div>
                    <Sport />
                </div>

            </div>
            <div className={s.footer}>
                <a href="#">More...</a>
            </div>
        </div>
    )
}

export default FavoriteSports;