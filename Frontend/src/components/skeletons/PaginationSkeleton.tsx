import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const PaginationSkeleton = () => {
    return (
        <div className="flex items-center justify-center gap-2 animate-pulse">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-300">
                <AiOutlineLeft className="w-5 h-5 text-gray-400" />
            </div>

            {Array(5).fill(0).map((_, index) => (
                <div 
                    key={index}
                    className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-300"
                />
            ))}

            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-300">
                <AiOutlineRight className="w-5 h-5 text-gray-400" />
            </div>
        </div>
    );
};

export default PaginationSkeleton;