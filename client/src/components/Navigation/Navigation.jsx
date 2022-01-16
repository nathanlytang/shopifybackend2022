import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./Navigation.module.css";

export default withRouter(function Navigation(props) {

    function setIcon(path, icon, iconSel, title) {
        const src = props.location.pathname === `/${path}` ? iconSel : icon;
        return <img src={src} alt={title} title={title} className={styles.icon} />;
    }

    function setActive(path) {
        return props.location.pathname === `/${path}` ? styles.active : "";
    }

    return (
        <div className={`${styles.sidebar}`}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={`${setActive("inventory")} ${styles.listItem}`}>
                        <Link to="/inventory">{"INVENTORY"}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
});