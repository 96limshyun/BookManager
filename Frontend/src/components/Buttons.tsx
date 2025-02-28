import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { PATH } from "@/constants";

export const CreateBookBtn = () => {
    return (
        <Link
            to={PATH.CREATE}
            className="flex gap-2 h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 cursor-pointer"
        >
            Create Book
            <FaPlus />
        </Link>
    );
};
