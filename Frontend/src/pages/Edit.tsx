import { useParams } from "react-router-dom";

import Form from "@/components/common/Form";
import EditFormSkeleton from "@/components/skeletons/EditFormSkeleton";
import { TITLE } from "@/constants";
import useBookDetailQuery from "@/hooks/Queries/useBookDetailQuery";
import useEditBookMutation from "@/hooks/Queries/useEditBookMutation";
import useFormHandler from "@/hooks/useFormHandler";

const Edit = () => {
    const { id } = useParams();
    const { data: bookDetailData, isLoading } = useBookDetailQuery(id!);
    const { mutate, isPending } = useEditBookMutation(Number(id));
    const { handleSubmit } = useFormHandler(mutate)

    if(isLoading) return <EditFormSkeleton/>
    
    return (
        <Form
            title={TITLE.EDIT_PAGE}
            initialValue={bookDetailData}
            handleSubmit={handleSubmit}
            isPending={isPending}
        />
    );
};

export default Edit;
