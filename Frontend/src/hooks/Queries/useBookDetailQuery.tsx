import { useQuery } from "@tanstack/react-query";

const fetchDetail = async (id: string) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/books/detail?id=${id}`
    );
    if (!response.ok) {
        throw new Error("에러");
    }
    return await response.json();
};

const useBookDetailQuery = (id: string) => {
    return useQuery({
        queryKey: ["detail", id],
        queryFn: () => fetchDetail(id!),
    });
};

export default useBookDetailQuery;
