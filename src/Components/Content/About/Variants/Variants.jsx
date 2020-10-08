import React from 'react';
import s from './Variants.module.css';

const Variants = (props) => {
    return (
        <div>
            <div className={s.variants}>
                <div className={s.variant}>Variants</div>
                <div className={s.variant}>Text</div>
            </div>
        </div>
    )
}

export default Variants;