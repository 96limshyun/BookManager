import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) {
        console.error("MySQL 연결 실패:", err);
        return;
    }
    console.log("✅ MySQL 연결 성공!");
});

app.get('/books', (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) {
            console.error("쿼리 실행 오류:", err);
            return res.status(500).send("서버 오류");
        }
        res.json(results);
    });
});

const PORT = process.env.EXPRESS_PORT;
app.listen(PORT, () => {
    console.log(`express 실행 중`);
});