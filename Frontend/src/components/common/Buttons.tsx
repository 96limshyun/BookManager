import { FormEvent } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
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
            className="create-button-style"
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
            className="edit-button-style"
        >
            <MdOutlineEdit className="text-lg text-gray-600" />
        </Link>
    );
};

export const DeleteBooksBtn = ({ id }: { id: number }) => {
    const { mutate, isPending } = useDeleteBooksMutation(id);

    const handleDelete = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
    };
    
    return (
        <form onSubmit={handleDelete}>
            <button
                type="submit"
                disabled={isPending}
                className="delete-button-style"
            >
                {isPending ? (
                    <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-gray-500" />
                ) : (
                    <FaRegTrashAlt className="text-lg text-gray-600" />
                )}
            </button>
        </form>
    );
};
