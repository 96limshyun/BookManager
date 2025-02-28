import { useSuspenseQuery } from "@tanstack/react-query";

const fetchTotalPage = async (query: string) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/totalPage?query=${query}`
    );
    if (!response.ok) {
        throw new Error("에러");
    }
    return await response.json();
};

const useTotalPageQuery = (query: string) => {
    return useSuspenseQuery({
        queryKey: [query],
        queryFn: () => fetchTotalPage(query),
    });
};

export default useTotalPageQuery;
