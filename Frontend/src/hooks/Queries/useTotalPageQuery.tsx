import { useSuspenseQuery } from "@tanstack/react-query";

import HTTPError from "@/utils/HTTPError";

const fetchTotalPage = async (query: string) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/totalPage?query=${query}`
    );
    if (!response.ok) {
        throw new HTTPError(response.status);
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
