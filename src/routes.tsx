import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Home } from "./pages/index";
import { FAQsPage } from "./pages/profile/FAQsPage";
import ProfileScreen from "./pages/profile/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <ProfileScreen />,
      },
      {
        path: "/faqs",
        element: <FAQsPage />,
      },
    ],
  },
]);
