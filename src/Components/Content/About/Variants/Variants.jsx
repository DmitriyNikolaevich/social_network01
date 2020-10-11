import React from 'react';
import Variant from './Variant/Variant';
import s from './Variants.module.css';

const Variants = (props) => {
    return (
        <div>
            <div className={s.variants}>
                <div className={s.variant}>
                    <Variant />
                    <Variant />
                    <Variant />
                    <Variant />
                    <Variant />
                    <Variant />
                    <Variant />
                    <Variant />
                </div>
                <div className={s.variant}>
                    <textarea>Some text by variant</textarea>
                </div>
            </div>
        </div>
    )
}

export default Variants;