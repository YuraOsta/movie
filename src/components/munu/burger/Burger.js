import React from "react";
import styles from './Burger.css';

const Burger = (props) => {
    console.log(props)
    function toggleMenuHandler(){
        console.log('click');
        props.toggleMenuHandler();
        
    }
    const style = props.showMenu ? `${styles.Burger} ${styles.isActive}` : styles.Burger;
    return (
        <div className={style} onClick={toggleMenuHandler}>
            <div className={styles.BurgerItem}></div>
        </div>
    )
}

export default Burger;