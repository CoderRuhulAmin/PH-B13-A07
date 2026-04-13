import { createBrowserRouter } from "react-router";
import Home from "../layouts/frontend/Home";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import TimeLine from "../pages/TimeLine";
import Stats from "../pages/Stats";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/timeline",
                Component: TimeLine,
            },
            {
                path: "/stats",
                Component: Stats,
            },
        ],
        errorElement: <ErrorPage />
    }
])