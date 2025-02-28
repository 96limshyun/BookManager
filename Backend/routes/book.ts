import express from "express";
import { db } from "../app";

const bookRouter = express.Router();

bookRouter.get("/books", (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) {
            console.error("쿼리 실행 오류:", err);
            return res.status(500).send("서버 오류");
        }
        res.json(results);
    });
});

export default bookRouter;