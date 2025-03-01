import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { BookType } from "@/types";

const fetchEditBook = async (body: BookType, id: number) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/books/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
    if (!response.ok) {
        throw new Error("에러");
    }
    return await response.json();
};

const useEditBookMutation = (id: number) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (body: BookType) => fetchEditBook(body, id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
            navigate("/")
        },
        throwOnError: true
    })
};

export default useEditBookMutation;
