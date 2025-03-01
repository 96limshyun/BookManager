import { FormEvent } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiStickyNote } from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
import { IoBookOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { PATH } from "@/constants";
import { BookType, Title } from "@/types";

interface FormProps {
    title: Title;
    initialValue?: BookType;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    isPending: boolean;
}

const Form = ({ title, initialValue, handleSubmit, isPending }: FormProps) => {
    const navigate = useNavigate();

    return (
        <section className="w-full mx-auto rounded-md border-[1px] border-gray-400 p-6 flex flex-col items-center">
            <h1 className="text-left font-bold text-2xl mb-6">{title}</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-[600px]">
                <div className="mb-4">
                    <label
                        htmlFor="bookname"
                        className="block text-left text-gray-700 mb-2"
                    >
                        도서명
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <IoBookOutline />
                        </div>
                        <input
                            className="w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            id="bookname"
                            name="bookname"
                            placeholder="도서명을 입력해주세요."
                            required
                            defaultValue={initialValue?.bookname || ""}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="authors"
                        className="block text-left text-gray-700 mb-2"
                    >
                        저자
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <IoPersonOutline />
                        </div>
                        <input
                            className="w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            id="authors"
                            name="authors"
                            placeholder="저자명을 입력해주세요."
                            required
                            defaultValue={initialValue?.authors || ""}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="publisher"
                        className="block text-left text-gray-700 mb-2"
                    >
                        출판사
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaRegBuilding />
                        </div>
                        <input
                            className="w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            id="publisher"
                            name="publisher"
                            placeholder="출판사명을 입력해주세요."
                            required
                            defaultValue={initialValue?.publisher || ""}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="isbn13"
                        className="block text-left text-gray-700 mb-2"
                    >
                        ISBN13
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <CiStickyNote />
                        </div>
                        <input
                            className="w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            id="isbn13"
                            name="isbn13"
                            placeholder="isbn13을 입력해주세요."
                            type="text"
                            pattern="^\d{13}$"
                            maxLength={13}
                            minLength={13}
                            title="ISBN13은 정확히 13자리 숫자여야 합니다."
                            required
                            defaultValue={initialValue?.isbn13 || ""}
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="quantity"
                        className="block text-left text-gray-700 mb-2"
                    >
                        수량
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MdOutlineProductionQuantityLimits />
                        </div>
                        <input
                            className="w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            type="number"
                            id="quantity"
                            name="quantity"
                            placeholder="수량을 입력해주세여"
                            required
                            defaultValue={initialValue?.quantity || 0}
                        />
                    </div>
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        onClick={() => navigate(PATH.HOME)}
                        type="button"
                        disabled={isPending}
                        className="px-4 py-2 min-w-[100px] bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors cursor-pointer"
                    >
                        취소
                    </button>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="px-4 py-2 min-w-[100px] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                        {isPending ? (
                            <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin m-auto" />
                        ) : (
                            "등록하기"
                        )}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;
