// Controllers: Inventory

import { Success, Error } from "../models/return_status";
import { Request, Response } from "express";
import * as db from '../db';

export async function addItem(req: Request, res: Response): Promise<Response> {
    try {
        await db.newItem({ id: req.body.id, name: req.body.name, description: req.body.description, available: req.body.available });
        return res.status(201).json(new Success("item added"));
    } catch (err) {
        console.error(err);
        return res.status(500).json(new Error("internal server error"));
    }
}

export async function updateItem(req: Request, res: Response): Promise<Response> {
    try {
        await db.updateItem({ id: req.body.id, name: req.body.name, description: req.body.description, available: req.body.available });
        return res.status(201).json(new Success("item updated"));
    } catch (err) {
        console.error(err);
        return res.status(500).json(new Error("internal server error"));
    }
}

export async function deleteItem(req: Request, res: Response): Promise<Response> {
    try {
        await db.deleteItem(req.body.id);
        return res.status(200).json(new Success("item deleted"));
    } catch (err) {
        console.error(err);
        return res.status(500).json(new Error("internal server error"));
    }
}

export async function viewItem(req: Request, res: Response): Promise<Response> {
    try {
        const data = await db.viewItems();
        return res.status(200).json(new Success(data));
    } catch (err) {
        console.error(err);
        return res.status(500).json(new Error("internal server error"));
    }
}
