import React from 'react';
import styles from './header.style.css';

const Header = function(){
    return (
        <header className={styles.header}>
            <div className={styles.header_naming}>CineMagic</div>
        </header>
    );
};;

export default Header;