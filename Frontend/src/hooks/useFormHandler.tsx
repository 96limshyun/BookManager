import { FormEvent } from "react";

import { BookType } from "@/types";
import { parseFormData } from "@/utils/parseFormData";

const useFormHandler = (mutate: (data: BookType) => void) => {
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const bookData = parseFormData(formData)

        mutate(bookData);
    };
    return { handleSubmit };
};

export default useFormHandler;
