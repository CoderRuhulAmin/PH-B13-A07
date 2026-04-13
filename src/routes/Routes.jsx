import { createBrowserRouter } from "react-router";
import Home from "../layouts/frontend/Home";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ],
        errorElement: <ErrorPage />
    }
])