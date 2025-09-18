import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Home } from "./pages/index";
import GetStart from "./pages/auth/components/GetStart1";
import GetStart2 from "./pages/auth/components/GetStart2";
import SignUp from "./pages/auth/components/SignUp";
import SignIn from "./pages/auth/components/SignIn";
import ForgetPassword from "./pages/auth/components/ForgetPassword";
import VerifyOTP from "./pages/auth/components/VerifyOTP";
import ResetPassword from "./pages/auth/components/ResetPassword";
import Favourite from "./pages/favourite/Favourite";

export const router = createBrowserRouter([
  {
    path: "/get-start",
    element: <GetStart />,
  },
  {
    path: "/get-start2",
    element: <GetStart2 />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOTP />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
    ],
  },
]);
