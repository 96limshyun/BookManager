import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = () => {
    return (
        <div className="flex items-center justify-center gap-2">
            <button className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">
                <AiOutlineLeft className="w-5 h-5" />
            </button>

            {[1, 2, 3, 4, 5].map((num) => (
                <button
                    key={num}
                    className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium ${
                        num === 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                    {num}
                </button>
            ))}

            <button className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">
                <AiOutlineRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Pagination;
