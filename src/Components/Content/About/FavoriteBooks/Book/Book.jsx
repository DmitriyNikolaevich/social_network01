import React from 'react';
import s from './Book.module.css';

const Book = (props) => {
    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.book}>
                    <div className={s.ava}>
                        <img src="http://s3-torquehhvm.wpengine.netdna-cdn.com/uploads/2018/05/eloquent-javascript.png" />
                    </div>
                    <div className={s.name}>
                        Eloquent JavaScript
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;