import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";

import useTotalPageQuery from "@/hooks/Queries/useTotalPageQuery";

interface PaginationProps {
    query: string;
    currentPage: number;
}

const Pagination = ({ query, currentPage }: PaginationProps) => {
    const { data: totalPage = 1 } = useTotalPageQuery(query);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const handlePageClick = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", String(page));
        navigate(`?${params.toString()}`);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageClick(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            handlePageClick(currentPage + 1);
        }
    };

    const pageGroupStart = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const pageGroupEnd = Math.min(pageGroupStart + 4, totalPage);

    return (
        <div className="flex items-center justify-center gap-2">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-10 h-10 rounded-md ${
                    currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
                <AiOutlineLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: pageGroupEnd - pageGroupStart + 1 }, (_, i) => {
                const page = pageGroupStart + i;
                return (
                    <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium ${
                            page === currentPage ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPage}
                className={`flex items-center justify-center w-10 h-10 rounded-md ${
                    currentPage === totalPage ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
                <AiOutlineRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Pagination;