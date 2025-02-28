import BookTable from "@/components/BookTable";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";

const Home = () => {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center gap-2">
                <Search />
                <Pagination />
            </div>
                <BookTable/>
        </section>
    );
};

export default Home;
