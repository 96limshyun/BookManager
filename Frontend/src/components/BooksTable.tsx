import { DeleteBooksBtn, EditBooksBtn } from "./Buttons";

import useFilteredBooksQuery from "@/hooks/Queries/useFilteredBooksQuery";
import { BookType } from "@/types";

interface BooksTableProps {
    query: string;
    currentPage: number;
}

const BooksTable = ({ query, currentPage }: BooksTableProps) => {
    const { data: books } = useFilteredBooksQuery(query, currentPage);
    return (
        <div className="overflow-hidden rounded-md shadow-md bg-gray-100 p-2">
            <table className="min-w-full text-gray-900 table-fixed">
                <thead>
                    <tr className="text-left text-md">
                        <th scope="col" className="py-3 font-medium pl-2 w-1/6">제목</th>
                        <th scope="col" className="py-3 font-medium pl-2 w-1/6">저자</th>
                        <th scope="col" className="py-3 font-medium pl-2 w-1/6">출판사</th>
                        <th scope="col" className="py-3 font-medium pl-2 w-1/6">ISBN13</th>
                        <th scope="col" className="py-3 font-medium pl-2 w-1/12">수량</th>
                        <th scope="col" className="py-3 font-medium pl-2 w-1/12">수정</th>
                        <th scope="col" className="py-3 font-medium pl-2 w-1/12">삭제</th>
                    </tr>
                </thead>
                <tbody className="bg-white text-left text-sm">
                    {books.map((book: BookType, index: number) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-2"><div className="truncate">{book.bookname}</div></td>
                            <td className="p-2"><div className="truncate">{book.authors}</div></td>
                            <td className="p-2"><div className="truncate">{book.publisher}</div></td>
                            <td className="p-2"><div className="truncate">{book.isbn13}</div></td>
                            <td className="p-2"><div className="truncate">{book.quantity}</div></td>
                            <td className="p-2"><EditBooksBtn id={book.id}/></td>
                            <td className="p-2"><DeleteBooksBtn /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BooksTable;