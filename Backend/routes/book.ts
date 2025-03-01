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

bookRouter.get("/books/detail", (req, res) => {
    const {id} = req.query;
    db.query(
        "SELECT id, bookname, authors, publisher, isbn13, quantity from books WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.error("쿼리 실행 오류:", err);
                return res.status(500).json({ message: "서버 오류 발생" });
            }
            res.json(result[0])
        }
    )
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

bookRouter.post("/books", (req, res) => {
    const { bookname, authors, publisher, isbn13, quantity } = req.body;

    db.query(
        "INSERT INTO books (bookname, authors, publisher, isbn13, quantity) VALUES (?, ? , ?, ?, ?)",
        [bookname, authors, publisher, isbn13, quantity],
        (err, result) => {
            if (err) {
                console.error("쿼리 실행 오류:", err);
                return res.status(500).send("서버 오류");
            }
            res.status(201).json({ message: "도서가 성공적으로 추가되었습니다." });
        }
    );
});

bookRouter.put("/books/:id", (req, res) => {
    const { id } = req.params;
    const { bookname, authors, publisher, isbn13, quantity } = req.body;
    console.log(id)

    db.query(
        "UPDATE books SET bookname = ?, authors = ?, publisher = ?, isbn13 = ?, quantity = ? WHERE id = ?",
        [bookname, authors, publisher, isbn13, quantity, id],
        (err, result) => {
            if (err) {
                console.error("쿼리 실행 오류:", err);
                return res.status(500).send("서버 오류");
            }

            res.status(200).json({ message: "도서가 성공적으로 수정되었습니다." });
        }
    );
});

export default bookRouter;
