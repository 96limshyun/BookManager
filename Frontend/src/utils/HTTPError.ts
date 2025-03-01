class HTTPError extends Error {
    statusCode: number;

    constructor(statusCode: number, message?: string) {
        super(message);

        this.name = "HTTPError";
        this.statusCode = statusCode;
    }
}

export default HTTPError;
