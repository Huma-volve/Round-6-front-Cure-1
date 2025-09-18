import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 w-full max-w-[1240px] mx-auto p-4 md:py-6 lg:py-10 min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
