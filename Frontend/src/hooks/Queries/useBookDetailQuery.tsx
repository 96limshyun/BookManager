import { useQuery } from "@tanstack/react-query";

import HTTPError from "@/utils/HTTPError";

const fetchDetail = async (id: string) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/books/detail?id=${id}`
    );
    if (!response.ok) {
        throw new HTTPError(response.status);
    }
    return await response.json();
};

const useBookDetailQuery = (id: string) => {
    return useQuery({
        queryKey: ["detail", id],
        queryFn: () => fetchDetail(id!),
        throwOnError: true
    });
};

export default useBookDetailQuery;
