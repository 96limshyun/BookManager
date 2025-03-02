import "@testing-library/jest-dom";
import { QueryClient } from "@tanstack/react-query";
import { vi } from "vitest";

import { BookType } from "@/types";

global.fetch = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: vi.fn(),
    };
});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

export const mockResponse = [
    {
        isbn13: "1234567890123",
        title: "테스트 책 제목",
        author: "테스트 저자",
        publisher: "테스트 출판사",
        quantity: 5,
    },
];

export const mockBookRequestBody: BookType = {
    id: 1,
    isbn13: "1234567890123",
    bookname: "테스트 책 제목",
    authors: "테스트 저자",
    publisher: "테스트 출판사",
    quantity: 5,
};