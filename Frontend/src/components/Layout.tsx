import { Link, Outlet, useLocation } from "react-router-dom";

import { CreateBookBtn } from "./Buttons";

import { PATH } from "@/constants";

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === PATH.HOME;

    return (
        <main className="p-4 flex flex-col gap-6 ">
            <div className="flex justify-between">
                <Link to={PATH.HOME} className="font-bold text-2xl">
                    BookManager
                </Link>
                {isHome && <CreateBookBtn />}
            </div>
            <Outlet />
        </main>
    );
};

export default Layout;
