import React from 'react';
import styles from './apply.style.css';

const Apply = function(props){

        return (
            <div className={styles.apply}>
                <p className={styles.price}>{props.price + ' p.'}</p>
                <button className={styles.buy} onClick={props.handleSeatApply}>Купить</button>
            </div>
        );
};

export default Apply;