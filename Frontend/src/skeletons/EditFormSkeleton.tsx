
import { CiStickyNote } from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
import { IoBookOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
const EditFormSkeleton = () => {
    return (
        <section className="w-full mx-auto rounded-md border-[1px] border-gray-400 p-6 flex flex-col items-center">
                    <h1 className="bg-gray-300 rounded mb-6"></h1>
                    <div  className="w-full max-w-[600px]">
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
                                    className="animate-pulse bg-gray-300 w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm"
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
                                    className="animate-pulse bg-gray-300 w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm"
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
                                    className="animate-pulse bg-gray-300 w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm"
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
                                    className="animate-pulse bg-gray-300 w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm"
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
                                    className="animate-pulse bg-gray-300 w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm"
                                />
                            </div>
                        </div>
        
                        <div className="flex justify-end space-x-4">
                            <button
                                className="animate-pulse px-4 py-2 min-w-[100px] bg-gray-300 rounded-md"
                            >
                            </button>
                            <button
                                className="animate-pulse px-4 py-2 min-w-[100px] bg-gray-300 rounded-md"
                            >
                            </button>
                        </div>
                    </div>
                </section>
    )
};

export default EditFormSkeleton;
