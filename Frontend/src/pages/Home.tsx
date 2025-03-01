import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";

import BooksTable from "@/components/BooksTable";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { DEFAULT_PAGE, DEFAULT_QUERY } from "@/constants";
import BooksTableSkeleton from "@/skeletons/BooksTableSkeleton";
import PaginationSkeleton from "@/skeletons/PaginationSkeleton";

const Home = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || DEFAULT_QUERY;
    const currentPage = Number(searchParams.get("page")) || DEFAULT_PAGE;

    return (
        <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center gap-2">
                <Search />
            </div>
            <Suspense fallback={<BooksTableSkeleton/>}>
                <BooksTable query={query} currentPage={currentPage} />
            </Suspense>
            
            <Suspense fallback={<PaginationSkeleton/>}>
                <Pagination query={query} currentPage={currentPage} />
            </Suspense>
        </section>
    );
};

export default Home;
