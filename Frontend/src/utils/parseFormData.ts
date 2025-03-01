import { DEFAULT_FIELD_VALUE, FORM_FIELDS } from "@/constants";
import { BookType } from "@/types";

export const parseFormData = (formData: FormData) => {
    return FORM_FIELDS.reduce((acc, curField) => {
        const value = formData.get(curField);

        if (curField === "quantity") {
            acc[curField] = Number(value)
        } else {
            acc[curField] = value?.toString() || DEFAULT_FIELD_VALUE;
        }
        
        return acc;
    }, {} as BookType);
};
