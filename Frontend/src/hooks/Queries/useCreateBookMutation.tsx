import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { BookType } from "@/types";

const fetchCreateBook = async (body: BookType) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/books`, {
        method: "POST",
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

const useCreateBookMutation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (body: BookType) => fetchCreateBook(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
            navigate("/")
        },
        throwOnError: true
    })
};

export default useCreateBookMutation;
