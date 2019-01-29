import React, {Component} from "react";
import styles from './Menu.css';
import { NavLink } from "react-router-dom";
class Menu extends Component{
    render() {
        console.log(this.props);
        const opened = this.props.showMenu ? `${styles.open} ${styles.Menu}` : styles.Menu;
        return (
            <div className={opened}>
                <ul>
                    <li>
                        <NavLink to={'/auth'} onClick={this.props.toggleMenuHandler}>auth</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} onClick={this.props.toggleMenuHandler}>Home</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;