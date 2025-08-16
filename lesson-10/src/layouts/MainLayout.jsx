import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ThemeProvider from "@/providers/ThemeProvider";

function MainLayout() {
    return (
        <>
            <ThemeProvider>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default MainLayout;