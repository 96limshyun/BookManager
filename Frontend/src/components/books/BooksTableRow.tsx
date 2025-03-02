import { DeleteBooksBtn, EditBooksBtn } from "../Common/Buttons"

import { BookType } from "@/types"

interface BooksTableRow {
    book: BookType;
    onOpen: () => void;
}

const BooksTableRow = ({book, onOpen}: BooksTableRow) => {
    const {id, bookname, authors, publisher, isbn13, quantity} = book

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50" onClick={onOpen}>
            <td className="p-2 w-[25%]">
                <div className="truncate w-[180px]">{bookname}</div>
            </td>
            <td className="p-2 w-[20%]">
                <div className="truncate w-[140px]">{authors}</div>
            </td>
            <td className="p-2 w-[20%]">
                <div className="truncate w-[140px]">{publisher}</div>
            </td>
            <td className="p-2 w-[20%]">
                <div className="truncate w-[120px]">{isbn13}</div>
            </td>
            <td className="p-2 w-[10%]">{quantity}</td>
            <td className="p-2">
                <div onClick={(e) => e.stopPropagation()}>
                    <EditBooksBtn id={id} />
                </div>
            </td>
            <td className="p-2">
                <div onClick={(e) => e.stopPropagation()}>
                    <DeleteBooksBtn id={id} />
                </div>
            </td>
        </tr>
    )
}

export default BooksTableRow