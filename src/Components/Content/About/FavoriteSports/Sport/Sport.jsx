import React from 'react';
import s from './Sport.module.css';

const Sport = (props) => {
    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.sport}>
                    <div className={s.ava}>
                        <img src="https://as25.ru/wp-content/uploads/2019/10/2693b11bbaa9bab83f232b99e9452b1d.jpg" />
                    </div>
                    <div className={s.name}>
                        Soccer
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sport;