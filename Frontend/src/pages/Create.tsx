import Form from "@/components/common/Form";
import { TITLE } from "@/constants";
import useCreateBookMutation from "@/hooks/Queries/useCreateBookMutation";
import useFormHandler from "@/hooks/useFormHandler";

const Create = () => {
    const { mutate, isPending } = useCreateBookMutation();
    const { handleSubmit } = useFormHandler(mutate)

    return (
        <Form
            title={TITLE.CREATE_PAGE}
            handleSubmit={handleSubmit}
            isPending={isPending}
        />
    );
};

export default Create;
