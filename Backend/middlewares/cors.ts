import cors from "cors";

const corsMiddleware = cors({
    origin: ["*"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
})

export default corsMiddleware