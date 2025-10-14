import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts.jsx";
import Home from "../pages/Home.jsx";
import AllApps from "../pages/AllApps.jsx";
import AppDetails from "../pages/AppDetails.jsx";
import Installation from "../pages/Installation.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";


const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/apps.json'),
            },
            {
                path: "/apps",
                element: <AllApps />,
                loader: () => fetch('/apps.json'),
            },
            {
                path: "/app/:id",
                element: <AppDetails />,
                loader: () => fetch('/apps.json'),
            },
            {
                path: "/installation",
                element: <Installation />,
                loader: () => fetch('/apps.json'),
            }
        ]
    }
]);

export default AppRoutes;

