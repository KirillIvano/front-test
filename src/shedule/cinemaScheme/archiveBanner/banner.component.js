import React from 'react';
import styles from './banner.style.css';

const Banner = function(){
        return (
            <div className={styles.banner}>
                <p className={styles.banner_text}>Это - архивная запись</p>
            </div>
        );
};

export default Banner;