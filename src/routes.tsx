import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import { DoctorDetails } from "./pages/index";
import { loader as doctorDetailsLoader } from "./pages/doctorDetails/DoctorDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/doctors/:doctorId",
                element: <DoctorDetails />,
                loader: doctorDetailsLoader,
            },
        ],
    },
]);
