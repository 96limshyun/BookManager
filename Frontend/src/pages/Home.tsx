import { useSearchParams } from "react-router-dom";

import BooksTable from "@/components/BooksTable";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";

const Home = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query") || ""
    const currentPage = Number(searchParams.get("page")) || 1
    
    return (
        <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center gap-2">
                <Search />
            </div>
                <BooksTable query={query} currentPage={currentPage} />
                <Pagination query={query} currentPage={currentPage}/>
        </section>
    );
};

export default Home;
