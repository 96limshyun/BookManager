import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import { CreateBookBtn } from "./Buttons";
import ErrorBoundary from "./ErrorBoundary";
import ErrorFallBack from "./ErrorFallBack";

import { PATH } from "@/constants";

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === PATH.HOME;
    const navigate = useNavigate();
    
    return (
        <ErrorBoundary fallback={ErrorFallBack} onReset={() => navigate(-1)}>
            <main className="p-4 flex flex-col gap-6 ">
                <div className="flex justify-between">
                    <Link to={PATH.HOME} className="font-bold text-2xl">
                        BookManager
                    </Link>
                    {isHome && <CreateBookBtn />}
                </div>
                <Outlet />
            </main>
        </ErrorBoundary>
    );
};

export default Layout;
