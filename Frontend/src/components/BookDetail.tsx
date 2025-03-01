import { useRef } from "react";
import { IoMdClose } from "react-icons/io";

import { BOOK_DETAIL_FIELDS } from "@/constants";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { BookType } from "@/types";

interface BookDetailModalProps {
    book: BookType;
    closeModal: () => void;
}

const BookDetail = ({ book, closeModal }: BookDetailModalProps) => {
    const { bookname } = book;
    const bookDetailCardRef = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(bookDetailCardRef, closeModal);

    return (
        <div
            ref={bookDetailCardRef}
            className="bg-white w-[300px] h-[400px] rounded-xl shadow-2xl flex flex-col"
        >
            <div className="border-b border-gray-300 px-6 py-4 flex justify-between items-center">
                <h1 className="font-bold text-xl truncate max-w-[230px] overflow-hidden text-ellipsis">
                    {bookname}
                </h1>
                <IoMdClose className="w-6 h-6 cursor-pointer" onClick={closeModal} />
            </div>

            <div className="w-full h-full flex flex-col justify-start p-6">
                <div className="space-y-4">
                    {BOOK_DETAIL_FIELDS.map(({ label, key }) => (
                        <div
                            key={label}
                            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                            <p className="text-sm font-semibold text-gray-600">{label}</p>
                            <p className="font-medium text-gray-800 truncate max-w-[150px] overflow-hidden text-ellipsis">
                                {book[key as keyof BookType]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookDetail;