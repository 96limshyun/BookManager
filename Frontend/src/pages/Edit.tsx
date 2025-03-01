import { FormEvent } from "react";
import { useParams } from "react-router-dom";

import Form from "@/components/Form";
import { FORM_FIELDS } from "@/constants";
import useBookDetailQuery from "@/hooks/Queries/useBookDetailQuery";
import useEditBookMutation from "@/hooks/Queries/useEditBookMutation";
import { BookType } from "@/types";

const Edit = () => {
    const { id } = useParams();
    const { data: bookDetailData } = useBookDetailQuery(id!);
    const { mutate } = useEditBookMutation(Number(id));
    
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
    return <Form title="도서 수정" initialValue={bookDetailData} handleSubmit={handleSubmit}/>;
};

export default Edit;
