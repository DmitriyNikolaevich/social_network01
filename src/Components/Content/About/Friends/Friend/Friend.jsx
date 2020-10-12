import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.friend}>
                    <div className={s.ava}>
                        <img src="http://4.bp.blogspot.com/-ZJ_QNXlZadc/Vof6aqAd8JI/AAAAAAAAMbI/dtBOmG0Sw04/s1600/a.jpg" />
                    </div>
                    <div className={s.name}>
                        Carmela Rose
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friend;