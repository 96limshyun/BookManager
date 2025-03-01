import { useSuspenseQuery } from "@tanstack/react-query";

import HTTPError from "@/utils/HTTPError";

const fetchFilteredBooks = async (query: string, currentPage: number) => {
    console.log(query, currentPage)
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/books?query=${query}&page=${currentPage}`
    );
    if (!response.ok) {
        throw new HTTPError(response.status);
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
