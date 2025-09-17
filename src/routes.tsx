import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Search from "./pages/Search/Search";
import GetStart from "./pages/auth/components/GetStart1";
import GetStart2 from "./pages/auth/components/GetStart2";
import SignUp from "./pages/auth/components/SignUp";
import SignIn from "./pages/auth/components/SignIn";
import ForgetPassword from "./pages/auth/components/ForgetPassword";
import VerifyOTP from "./pages/auth/components/VerifyOTP";
import ResetPassword from "./pages/auth/components/ResetPassword";
import DoctorDetails from "./pages/doctorDetails/DoctorDetails";
import FAQsPage from "./pages/profile/FAQsPage";
import ProfileScreen from "./pages/profile/ProfilePage";
import { PrivacyPage } from "./pages/profile/PrivacyPolicyPage";
import Notifications from "./pages/notification/Notifications";
import Review from "./pages/review/Review";
import EditProfilePage from "./pages/profile/EditProfile";

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
        path: "search",
        element: <Search />,
      },
      {
        path: "/doctors/:id",
        element: <DoctorDetails />,
      },
      {
        path: "/profile",
        element: <ProfileScreen />,
      },
      {
        path: "/faqs",
        element: <FAQsPage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/doctor/:id/review",
        element: <Review />,
      },
      {
        path: "/edit-profile",
        element: <EditProfilePage />,
      },
    ],
  },
]);
