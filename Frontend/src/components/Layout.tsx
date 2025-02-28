import { FaPlus } from "react-icons/fa6";
import { Link, Outlet, useLocation } from "react-router-dom";

import { PATH } from "@/constants";

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === PATH.HOME;

    return (
        <main className="p-4">
            <div className="flex justify-between">
                <Link to={PATH.HOME} className="font-bold text-2xl">
                    BookManager
                </Link>
                {isHome && (
                    <Link
                        to={PATH.CREATE}
                        className="flex gap-2 h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 cursor-pointer"
                    >
                        Create Book
                        <FaPlus />
                    </Link>
                )}
            </div>
            <Outlet />
        </main>
    );
};

export default Layout;
