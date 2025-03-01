import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";

import { route } from "./routers/routes";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            throwOnError: true,
        },
        mutations: {
            throwOnError: true,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={route} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
