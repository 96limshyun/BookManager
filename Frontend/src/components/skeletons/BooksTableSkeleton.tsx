const BooksTableSkeleton = () => {
    return (
    <div className="overflow-hidden rounded-md shadow-md bg-gray-100 p-2">
        <table className="min-w-full text-gray-900 table-fixed">
            <thead>
            <tr className="text-left text-md">
                <th scope="col" className="py-3 font-medium pl-2">제목</th>
                <th scope="col" className="py-3 font-medium pl-2">저자</th>
                <th scope="col" className="py-3 font-medium pl-2">출판사</th>
                <th scope="col" className="py-3 font-medium pl-2">ISBN13</th>
                <th scope="col" className="py-3 font-medium pl-2">수량</th>
                <th scope="col" className="py-3 font-medium pl-2">관리</th>
            </tr>
            </thead>
            <tbody className="bg-white text-left text-sm">
            {Array(10).fill(0).map((_, index) => (
                <tr key={index} className="border-b border-gray-200 animate-pulse">
                <td className="p-2">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </td>
                <td className="p-2">
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </td>
                <td className="p-2">
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </td>
                <td className="p-2">
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </td>
                <td className="p-2">
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </td>
                <td className="p-2 flex space-x-2">
                    <div className="h-6 w-6 bg-gray-300 rounded"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded"></div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);
};

export default BooksTableSkeleton;