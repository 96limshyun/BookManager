export const PATH = {
    HOME: "/",
    CREATE: "/create",
    EDIT: "/edit",
} as const;

export const FORM_FIELDS = [
    "bookname",
    "authors",
    "publisher",
    "isbn13",
    "quantity",
] as const;

export const BOOK_DETAIL_FIELDS = [
    { label: "ID", key: "id" },
    { label: "저자", key: "authors" },
    { label: "출판사", key: "publisher" },
    { label: "ISBN-13", key: "isbn13" },
    { label: "재고", key: "quantity" },
] as const;

export const TITLE = {
    MAIN: "BookManager",
    CREATE_PAGE: "도서 등록",
    EDIT_PAGE: "도서 수정",
} as const;

export const DELAY_TIME = 300;
export const DEFAULT_PAGE = 1;
export const DEFAULT_QUERY = "";
export const DEFAULT_FIELD_VALUE = "";
export const PAGE_GROUP_SIZE = 5;
