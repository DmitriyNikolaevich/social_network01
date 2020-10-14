import React from 'react';
import Book from './Book/Book';
import s from './FavoriteBooks.module.css';

const FavoriteBooks = (props) => {
    return (
        <div className={s.main}>
            <div className={s.header}>
                <h1>
                    Favorite Books
                </h1>
            </div>
            <div className={s.wrapper}>
                <div>
                    <Book />
                </div>
                <div>
                    <Book />
                </div>
                <div>
                    <Book />
                </div>

            </div>
            <div className={s.footer}>
                <a href="#">More...</a>
            </div>
        </div>
    )
}

export default FavoriteBooks;