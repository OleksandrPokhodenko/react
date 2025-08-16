import CardsList from "@/components/CardsList";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function SummaryPage() {
    const { theme } = useContext(ThemeContext)
    return (
        <section className={theme === 'dark' ? 'summary-page dark-theme' : 'summary-page'}>
            <h1 className="summary-page__title">Сорінка підсумку</h1>
            <CardsList />
        </section>
    );
}

export default SummaryPage;