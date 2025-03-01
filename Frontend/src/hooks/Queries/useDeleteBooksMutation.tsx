import { useMutation, useQueryClient } from "@tanstack/react-query";


const fetchDeleteBook = async (id: number) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/books/${id}`, {
        method: "DELETE",
    })
    if (!response.ok) {
        throw new Error("에러");
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
