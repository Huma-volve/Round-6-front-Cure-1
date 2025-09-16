import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Home } from "./pages/index";
import Search from "./pages/Search/Search";

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
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
