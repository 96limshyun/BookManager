import express from "express";
import { db } from "../app";

const bookRouter = express.Router();
const ITEMS_PER_PAGE = 10;

bookRouter.get("/books", (req, res) => {
    const searchQuery = req.query.query ? `%${req.query.query}%` : "%";
    const currentPage = req.query.page;

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    db.query(
        "SELECT * FROM books WHERE bookname LIKE ? OR authors LIKE ? ORDER BY id DESC LIMIT ? OFFSET ?",
        [searchQuery, searchQuery, ITEMS_PER_PAGE, offset],
        (err, results) => {
            if (err) {
                console.error("쿼리 실행 오류:", err);
                return res.status(500).send("서버 오류");
            }
            res.json(results);
        }
    );
});

bookRouter.get("/totalPage", (req, res) => {
    const searchQuery = req.query.query ? `%${req.query.query}%` : "%";

    db.query(
        "SELECT COUNT(*) AS total FROM books WHERE bookname LIKE ? OR authors LIKE ?",
        [searchQuery, searchQuery],
        (err, results) => {
            if (err) {
                console.error("쿼리 실행 오류:", err);
                return res.status(500).send("서버 오류");
            }
            const totalBooks = results[0].total;
            const totalPages = Math.ceil(totalBooks / ITEMS_PER_PAGE);

            res.json(totalPages);
        }
    );
});

export default bookRouter;
