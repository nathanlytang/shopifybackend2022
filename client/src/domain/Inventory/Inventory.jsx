import React, { useEffect, useState } from "react";
import { MainAppGrid, Table } from "../../components";
import styles from "./Inventory.module.css";

export default function Inventory() {
    document.title = "Inventory";
    let content =
        <div>
            <div className={`${styles.container}`}>
                <Table />
            </div>
        </div >;

    return (
        <MainAppGrid content={content} />
    );
}