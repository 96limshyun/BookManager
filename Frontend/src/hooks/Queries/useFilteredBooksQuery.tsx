import { useSuspenseQuery } from "@tanstack/react-query";

const fetchFilteredBooks = async (query: string, currentPage: number) => {
    const response = await fetch(
        `http://localhost:3000/books?query=${query}&page=${currentPage}`
    );
    if (!response.ok) {
        throw new Error("에러");
    }
    return await response.json();
};

const useFilteredBooksQuery = (query: string, currentPage: number) => {
    return useSuspenseQuery({
        queryKey: ["books", query, currentPage],
        queryFn: () => fetchFilteredBooks(query, currentPage),
    });
};

export default useFilteredBooksQuery;
