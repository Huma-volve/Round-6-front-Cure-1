import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { DoctorDetails } from "./pages/index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/doctors/:id",
                element: <DoctorDetails />,
            },
        ],
    },
]);
