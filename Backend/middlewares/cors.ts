import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const corsMiddleware = cors({
    origin: [
        process.env.DEV_URL,
        process.env.S3_BUCKET_URL,
        process.env.CLOUD_FRONT_URL
    ],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
})

export default corsMiddleware