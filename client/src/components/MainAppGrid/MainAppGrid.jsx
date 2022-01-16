import React, { useEffect, useState } from "react";
import styles from "./MainAppGrid.module.css";
import { Navigation } from "../../components";

export default function MainAppGrid(props) {
    return (
        <div className={` ${styles.wrapper}`}>
            <div className={` ${styles.navigation}`}>
                <Navigation />
            </div>
            <div className={styles.mainContent}>
                {props.content}
            </div>
        </div>
    );
}