import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import { Appointments, DoctorDetails } from "./pages/index";
import { loader as doctorDetailsLoader } from "./pages/doctorDetails/DoctorDetails";
import { loader as appointmentsLoader } from "./pages/appointments/Appointments";

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
            {
                path: "/appointments",
                element: <Appointments />,
                loader: appointmentsLoader,
            },
        ],
    },
]);
