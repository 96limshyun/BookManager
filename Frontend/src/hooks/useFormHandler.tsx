import { FormEvent } from "react";

import { FORM_FIELDS } from "@/constants";
import { BookType } from "@/types";

const useFormHandler = (mutate: (data: BookType) => void) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const bookData: BookType = FORM_FIELDS.reduce((acc, curField) => {
            const value = formData.get(curField);
            if (curField === "quantity") {
                acc[curField] = value ? Number(value) : 0;
            } else {
                acc[curField] = value?.toString() || "";
            }
            return acc;
        }, {} as BookType);

        mutate(bookData);
    };
    return { handleSubmit };
};

export default useFormHandler;
