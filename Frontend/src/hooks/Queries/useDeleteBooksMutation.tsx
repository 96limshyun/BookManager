import { useMutation, useQueryClient } from "@tanstack/react-query";

import HTTPError from "@/utils/HTTPError";


const fetchDeleteBook = async (id: number) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/books/${id}`, {
        method: "DELETE",
    })
    if (!response.ok) {
        throw new HTTPError(response.status);
    }
    return await response.json();
};

const useDeleteBooksMutation = (id: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => fetchDeleteBook(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
        },
        throwOnError: true
    })
};

export default useDeleteBooksMutation;
