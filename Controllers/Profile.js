import express from "express";
import dotenv from "dotenv";
import { pool } from "../index.js";
dotenv.config();


export const updateCompanyProfile = async (req, res) => {
    const { id, name, description, location, img } = req.body
    const query = "UPDATE user set name=?,description=?,location=?,img=? where id=?";
    pool.query(query, [name, description, location, img, id], (err, row, field) => {
        if (err) { console.log(err) }
        if (row) { res.status(200).send({ message: 'updated' }) }
    }
    )
}