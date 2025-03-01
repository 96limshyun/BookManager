import { DeleteBooksBtn, EditBooksBtn } from "./Buttons"

import { BookType } from "@/types"

interface BooksTableRow {
    book: BookType;
    onOpen: () => void;
}

const BooksTableRow = ({book, onOpen}: BooksTableRow) => {
    const {id, bookname, authors, publisher, isbn13, quantity} = book

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50" onClick={onOpen}>
            <td className="p-2"><div className="truncate">{bookname}</div></td>
            <td className="p-2"><div className="truncate">{authors}</div></td>
            <td className="p-2"><div className="truncate">{publisher}</div></td>
            <td className="p-2"><div className="truncate">{isbn13}</div></td>
            <td className="p-2"><div className="truncate">{quantity}</div></td>
            <td className="p-2"><EditBooksBtn id={id}/></td>
            <td className="p-2"><DeleteBooksBtn id={id}/></td>
        </tr>
    )
}

export default BooksTableRow