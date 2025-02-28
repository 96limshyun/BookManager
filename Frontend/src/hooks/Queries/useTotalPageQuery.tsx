import { useSuspenseQuery } from "@tanstack/react-query";

const fetchTotalPage = async (query: string) => {
    const response = await fetch(
        `http://localhost:3000/totalPage?query=${query}`
    );
    if (!response.ok) {
        throw new Error("에러");
    }
    console.log(response)
    return await response.json();
};

const useTotalPageQuery = (query: string) => {
    return useSuspenseQuery({
        queryKey: [query],
        queryFn: () => fetchTotalPage(query),
    });
};

export default useTotalPageQuery;
