import { useNavigate } from "react-router-dom";

import { PATH } from "@/constants";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mt-2">페이지를 찾을 수 없습니다.</p>
            
            <button 
                onClick={() => navigate(PATH.HOME)} 
                className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
            >
                홈으로 돌아가기
            </button>
        </div>
    );
};

export default NotFound;