import React from 'react';
import Friends from './Friends/Friends';
import Photos from './Photos/Photos';
import FavoriteBooks from './FavoriteBooks/FavoriteBooks';
import FavoriteSports from './FavoriteSports/FavoriteSports';
import Variants from './Variants/Variants';

const About = (props) => {
    return (
        <div>
            <Variants />
            <Photos />
            <Friends />
            <FavoriteBooks />
            <FavoriteSports />
        </div>
    )
}

export default About;