export const PATH = {
    HOME: "/",
    CREATE: "/create",
    EDIT: "/edit",
};

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
];


export const DELAY_TIME = 300
