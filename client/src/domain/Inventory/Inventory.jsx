import React, { useEffect, useState } from "react";
import { MainAppGrid, Table } from "../../components";
import styles from "./Inventory.module.css";

export default function Inventory() {
    document.title = "Inventory";
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://127.0.0.1:9000/inventory/get', {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'include',
                });
                if (res.ok) {
                    const data = await res.json();
                    setInventory(data.details);
                }
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    });

    let content =
        <div>
            <div className={`${styles.container}`}>
                <Table inventory={inventory} />
            </div>
        </div >;

    return (
        <MainAppGrid content={content} />
    );
}