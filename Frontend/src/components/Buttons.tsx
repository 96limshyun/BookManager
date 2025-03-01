import { FormEvent } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

import { PATH } from "@/constants";
import useDeleteBooksMutation from "@/hooks/Queries/useDeleteBooksMutation";
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

export const EditBooksBtn = ({ id }: { id: number }) => {
    return (
        <Link
            to={`${PATH.EDIT}/${id}`}
            className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-100"
        >
            <MdOutlineEdit className="text-lg text-gray-600" />
        </Link>
    );
};

export const DeleteBooksBtn = ({ id }: { id: number }) => {
    const { mutate } = useDeleteBooksMutation(id);
    const handleDelete = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
    };
    
    return (
        <form onSubmit={handleDelete}>
            <button
                type="submit"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-100 cursor-pointer"
            >
                <FaRegTrashAlt className="text-lg text-gray-600" />
            </button>
        </form>
    );
};
