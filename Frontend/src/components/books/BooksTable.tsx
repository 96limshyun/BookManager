import { useState } from "react";

import BookDetail from "./BookDetail";
import BooksTableRow from "./BooksTableRow";
import Modal from "../common/Modal";

import useFilteredBooksQuery from "@/hooks/Queries/useFilteredBooksQuery";
import { BookType } from "@/types";

interface BooksTableProps {
    query: string;
    currentPage: number;
}

const BooksTable = ({ query, currentPage }: BooksTableProps) => {
    const { data: books } = useFilteredBooksQuery(query, currentPage);
    const [selectedBook, setSelectedBook] = useState<BookType | null>(null)

    return (
        <div className="overflow-hidden rounded-md shadow-md bg-gray-100 p-2">
            <table className="min-w-full text-gray-900 table-fixed">
                <thead>
                    <tr className="text-left text-md">
                        <th scope="col" className="py-3 font-medium pl-2 w-[25%]">제목</th>
                        <th scope="col" className="py-3 font-medium pl-2 w-[20%]">저자</th>
                        <th scope="col" className="py-3 font-medium pl-2 w-[20%]">출판사</th>
                        <th scope="col" className="py-3 font-medium pl-2 w-[20%]">ISBN13</th>
                        <th scope="col" className="py-3 font-medium pl-2 w-[10%]">수량</th>
                    </tr>
                </thead>
                <tbody className="bg-white text-left text-sm">
                    {books.map((book: BookType) => (
                        <BooksTableRow key={book.isbn13} book={book} onOpen={() => setSelectedBook(book)}/>
                    ))}
                </tbody>
            </table>
            {selectedBook && (
                <Modal>
                    <BookDetail book={selectedBook} closeModal={() => setSelectedBook(null)}/>
                </Modal>
            )}
        </div>
    );
};

export default BooksTable;