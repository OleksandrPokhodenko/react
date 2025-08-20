import CardsList from "@/components/CardsList";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function HotelsPage() {
    const { theme } = useContext(ThemeContext)
    return (
        <section className={theme === 'dark' ? 'hotels-page hotels-page--dark-theme' : 'hotels-page'}>
            <div className="hotels-page__container">
                <h1 className="hotels-page__title">Сторінка вибору готелів</h1>
                <CardsList />
            </div>
        </section>
    );
}

export default HotelsPage;