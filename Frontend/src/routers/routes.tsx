import { createBrowserRouter } from "react-router-dom";

import Layout from "@/components/Layout";
import NotFound from "@/components/NotFound";
import Create from "@/pages/Create";
import Edit from "@/pages/Edit";
import Home from "@/pages/Home";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "create",
                element: <Create />,
            },
            {
                path: "edit/:id",
                element: <Edit />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound/>,
    },
]);
