import CardsList from "@/components/CardsList";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function SummaryPage() {
    const { theme } = useContext(ThemeContext)
    return (
        <section className={theme === 'dark' ? 'summary-page summary-page--dark-theme' : 'summary-page'}>
            <div className="summary-page__container">
                <h1 className="summary-page__title">Сорінка підсумку</h1>
                <CardsList />
            </div>
        </section>
    );
}

export default SummaryPage;