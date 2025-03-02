import { Link } from "react-router-dom";

import { PATH } from "@/constants";
import { HTTP_ERROR_MESSAGE } from "@/constants/HTTPErrorMessage";
import { ErrorProps } from "@/types";

const ErrorFallback = ({ statusCode = 404, resetError }: ErrorProps) => {
    const currentStatusCode = statusCode as keyof typeof HTTP_ERROR_MESSAGE;

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <Link to={PATH.HOME} className="text-2xl font-bold">
                BookManager
            </Link>

            <h1 className="mt-4 text-6xl font-extrabold text-gray-800">{currentStatusCode}</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">{HTTP_ERROR_MESSAGE[currentStatusCode].HEADING}</h2>
            <p className="text-gray-500 mt-2">{HTTP_ERROR_MESSAGE[currentStatusCode].BODY}</p>

            <div className="mt-6 flex gap-4">
                <button 
                    onClick={resetError}
                    className="px-6 py-2 text-white bg-blue-600 rounded-md"
                >
                    돌아가기
                </button>
            </div>
        </div>
    );
};

export default ErrorFallback;