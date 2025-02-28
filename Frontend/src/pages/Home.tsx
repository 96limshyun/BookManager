import { useSearchParams } from "react-router-dom";

import BookTable from "@/components/BookTable";
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
                <Pagination query={query} currentPage={currentPage}/>
            </div>
                <BookTable/>
        </section>
    );
};

export default Home;
