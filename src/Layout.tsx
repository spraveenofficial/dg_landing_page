import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/30">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
