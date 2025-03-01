import { useRef } from "react";
import { IoMdClose } from "react-icons/io";

import useOnClickOutside from "@/hooks/useOnClickOutside";
import { BookType } from "@/types";

interface BookDetailModalProps {
    book: BookType;
    closeModal: () => void;
}

const BookDetail = ({ book, closeModal }: BookDetailModalProps) => {
    const { id, bookname, authors, publisher, isbn13, quantity } = book;
    const bookDetailCardRef = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(bookDetailCardRef, closeModal);
    return (
        <div
            ref={bookDetailCardRef}
            className="bg-white w-[300px] h-[400px] rounded-xl shadow-2xl flex flex-col"
        >
            <div className="border-b-[1px] border-gray-300 px-6 py-4 flex justify-between items-center">
                <h1 className="font-bold text-xl">{bookname}</h1>
                <IoMdClose
                    className="w-6 h-6 cursor-pointer"
                    onClick={closeModal}
                />
            </div>
            <div className="w-full h-full flex flex-col justify-start p-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-600">
                            ID
                        </p>
                        <p className="font-medium text-gray-800">{id}</p>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-600">
                            저자
                        </p>
                        <p className="font-medium text-gray-800">{authors}</p>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-600">
                            출판사
                        </p>
                        <p className="font-medium text-gray-800">{publisher}</p>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-600">
                            ISBN-13
                        </p>
                        <p className="font-medium text-gray-800">{isbn13}</p>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-600">
                            재고
                        </p>
                        <p className="font-medium text-green-600">{quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
