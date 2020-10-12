import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.main}>
            <div className={s.header}>
                <h1>
                    Friends
                </h1>
            </div>
            <div className={s.wrapper}>
                <div>
                    <Friend />
                </div>
                <div>
                    <Friend />
                </div>            
            </div>
            <div className={s.footer}>
                <a href="#"> More... </a>
            </div>
        </div>
    )
}

export default Friends;