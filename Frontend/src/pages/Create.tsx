import { FormEvent } from "react";

import Form from "@/components/Form";
import { FORM_FIELDS } from "@/constants";
import useCreateBookMutation from "@/hooks/Queries/useCreateBookMutation";
import { BookType } from "@/types";

const Create = () => {
    const { mutate } = useCreateBookMutation();

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
    return <Form title="도서 등록" handleSubmit={handleSubmit} />;
};

export default Create;
