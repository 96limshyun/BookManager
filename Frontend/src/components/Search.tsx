import { CiSearch } from "react-icons/ci";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

import { DELAY_TIME } from "@/constants";

const Search = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");

        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }

        navigate(`${location.pathname}?${params.toString()}`);
    }, DELAY_TIME);

    return (
        <div className="relative w-full min-w-[200px]">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-lg" />
            <input
                className="w-full rounded-md border-[1px] border-gray-400 py-[9px] pl-10 text-sm placeholder:text-gray-500"
                placeholder="Search by title or author"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            />
        </div>
    );
};

export default Search;
