import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Navigation.module.css";

export default withRouter(function Navigation() {
    return (
        <div className={`${styles.sidebar}`}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={`${styles.active} ${styles.listItem}`}>
                        {"INVENTORY"}
                    </li>
                </ul>
            </nav>
        </div>
    );
});