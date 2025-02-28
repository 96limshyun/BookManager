import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import bookRouter from "./routes/book";

dotenv.config();

const app = express();

export const db = mysql.createConnection({
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
    console.log("MySQL 연결 성공");
});

app.use("/", bookRouter)

const PORT = process.env.EXPRESS_PORT;
app.listen(PORT, () => {
    console.log(`express 실행 중 ${PORT}}`);
});