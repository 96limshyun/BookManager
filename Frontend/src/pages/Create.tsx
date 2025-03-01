import Form from "@/components/Form";
import useCreateBookMutation from "@/hooks/Queries/useCreateBookMutation";
import useFormHandler from "@/hooks/useFormHandler";

const Create = () => {
    const { mutate, isPending } = useCreateBookMutation();
    const { handleSubmit } = useFormHandler(mutate)

    return (
        <Form
            title="도서 등록"
            handleSubmit={handleSubmit}
            isPending={isPending}
        />
    );
};

export default Create;
