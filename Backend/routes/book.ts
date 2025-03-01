import express from "express";
import { db } from "../app";
import { DEFAULT_PAGE, ITEMS_PER_PAGE, QUERY_ERROR_MESSAGE } from "../constants";

const bookRouter = express.Router();


bookRouter.get("/books", (req, res) => {
    const searchQuery = req.query.query ? `%${req.query.query}%` : "%";
    const currentPage = req.query.page || DEFAULT_PAGE;

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    db.query(
        "SELECT * FROM books WHERE bookname LIKE ? OR authors LIKE ? ORDER BY id DESC LIMIT ? OFFSET ?",
        [searchQuery, searchQuery, ITEMS_PER_PAGE, offset],
        (err, results) => {
            if (err) {
                console.error(QUERY_ERROR_MESSAGE.SEARCH, err);
                
                return res.status(500);
            }
            
            res.status(200).json(results);
        }
    );
});

bookRouter.get("/books/detail", (req, res) => {
    const { id } = req.query;
    db.query(
        "SELECT id, bookname, authors, publisher, isbn13, quantity from books WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.error(QUERY_ERROR_MESSAGE.DETAIL, err);
                return res.status(500);
            }
            res.json(result[0]);
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
                console.error(QUERY_ERROR_MESSAGE.TOTAL_PAGE, err);
                return res.status(500);
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
                console.error(QUERY_ERROR_MESSAGE.CREATE_BOOK, err);
                return res.status(500);
            }
            res.status(201);
        }
    );
});

bookRouter.put("/books/:id", (req, res) => {
    const { id } = req.params;
    const { bookname, authors, publisher, isbn13, quantity } = req.body;

    db.query(
        "UPDATE books SET bookname = ?, authors = ?, publisher = ?, isbn13 = ?, quantity = ? WHERE id = ?",
        [bookname, authors, publisher, isbn13, quantity, id],
        (err, result) => {
            if (err) {
                console.error(QUERY_ERROR_MESSAGE.EDIT_BOOK, err);
                return res.status(500);
            }

            res.status(200);
        }
    );
});

bookRouter.delete("/books/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM books WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.error(QUERY_ERROR_MESSAGE.DELETE_BOOK, err);
            return res.status(500);
        }

        res.status(200);
    });
});

export default bookRouter;
