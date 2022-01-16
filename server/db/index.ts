import Database from 'better-sqlite3';
import { Item } from '../models/item';

const path = "database.db"; // Default database path (In db folder)

/**
 * Check if database exists.  Create database and inventory table if not exists
 * @returns database object
 */
export async function initializeDB() {
    const db = new Database(path);
    db.exec("CREATE TABLE IF NOT EXISTS inventory ('id' INTEGER PRIMARY KEY AUTOINCREMENT, 'name' VARCHAR, 'description' VARCHAR, 'available' INTEGER);");
    return db;
}

/**
 * Create a new inventory item
 * @param item Item object with name, description, and available count
 */
export async function newItem(item: Item) {
    try {
        const db = new Database(path);
        const statement = db.prepare("INSERT INTO inventory (name, description, available) VALUES (?, ?, ?);");
        statement.run(item.name, item.description, item.available);
    } catch (err) {
        console.error(err);
    }
}

/**
 * Update inventory item information
 * @param item Item object with update name, description, and available count
 */
export async function updateItem(item: Item) {
    try {
        const db = new Database(path);
        const statement = db.prepare("UPDATE inventory SET name = ?, description = ?, available = ? WHERE id = ?;");
        statement.run(item.name, item.description, item.available, item.id);
    } catch (err) {
        console.error(err);
    }
}

/**
 * Delete an inventory item
 * @param id Internal tracking id number
 */
export async function deleteItem(id: number) {
    try {
        const db = new Database(path);
        const statement = db.prepare("DELETE FROM inventory WHERE id = ?;");
        statement.run(id);
    } catch (err) {
        console.error(err);
    }
}


/**
 * Get all inventory information from database
 * @returns All inventory rows
 */
export async function viewItems() {
    try {
        const db = new Database(path);
        const data = db.prepare("SELECT * FROM inventory;").all();
        return data;
    } catch (err) {
        console.error(err);
    }
}