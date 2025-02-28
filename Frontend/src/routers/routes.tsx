import { createBrowserRouter } from "react-router-dom";

import Layout from "@/components/Layout";
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
                path: "edit",
                element: <Edit />,
            },
        ],
    },
    {
        path: "*",
        element: <div>NotFound Component 추후 생성</div>,
    },
]);
