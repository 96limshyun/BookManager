export type Title = "도서 등록" | "도서 수정"

export interface BookType {
    id?: number;
    bookname: string;
    authors: string;
    publisher: string;
    isbn13: string;
    quantity: number;
}