import { Link } from "react-router-dom";

import { PATH } from "@/constants";
import { HTTP_ERROR_MESSAGE } from "@/constants/HTTPErrorMessage";
import { ErrorProps } from "@/types";
const ErrorFallBack = ({ statusCode = 404, resetError }: ErrorProps) => {
    const currentStatusCode = statusCode as keyof typeof HTTP_ERROR_MESSAGE;

    return (
        <div>
            <div>
                <Link to={PATH.HOME}>BookManager</Link>
                <h1>{currentStatusCode}에러</h1>
                <h1>{HTTP_ERROR_MESSAGE[currentStatusCode].HEADING}</h1>
                <p>{HTTP_ERROR_MESSAGE[currentStatusCode].BODY}</p>
                <div>
                    <button onClick={resetError}>돌아가기</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorFallBack;
