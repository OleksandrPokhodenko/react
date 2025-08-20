import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ThemeProvider from "@/providers/ThemeProvider";
import CardListProvider from "@/providers/CardListProvider";
import SelectedListProvider from "@/providers/SelectedListProvider";

function MainLayout() {
    return (
        <>
            <ThemeProvider>
                <Header />
                <CardListProvider>
                    <SelectedListProvider>
                        <main>
                            <Outlet />
                        </main>
                    </SelectedListProvider>
                </CardListProvider>
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default MainLayout;