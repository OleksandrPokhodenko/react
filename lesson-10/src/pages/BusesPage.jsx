import CardsList from "@/components/CardsList";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function BusesPage() {
    const { theme } = useContext(ThemeContext)
    return (
        <section className={theme === 'dark' ? 'buses-page buses-page--dark-theme' : 'buses-page'}>
            <div className="buses-page__container">
                <h1 className="buses-page__title">Сторінка вибору автобуса</h1>
                <CardsList />
            </div>
        </section>
    );
}

export default BusesPage;