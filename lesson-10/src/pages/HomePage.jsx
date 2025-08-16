import { ThemeContext } from "@/context/ThemeContext";
import frontRoutes from "@/routes/frontRoutes";
import { useContext } from "react";
import { Link } from "react-router";

function HomePage() {
    const { theme } = useContext(ThemeContext)
    return (
        <section className={theme === 'dark' ? 'home-page dark-theme' : 'home-page'}>
            <div className="home-page__container">
                <h1 className="home-page__title">Плануй свою подорож легко!</h1>
                <h2 className="home-page__subtitle">Виберіть зручні автобуси та комфортні готелі — і ми підберемо для вас найкращий варіант із доступних.</h2>
                <ul className="home-page__list">
                    <li className="home-page__item">Обирайте автобуси – можете вибрати кілька маршрутів, які вам підходять.</li>
                    <li className="home-page__item">Обирайте готелі – вкажіть усі варіанти, що вам подобаються.</li>
                    <li className="home-page__item">Отримайте підсумок – перегляньте список вибраних автобусів та готелів і за потреби відредагуйте його.</li>
                </ul>
                <div className="home-page__info">🚍 Автобуси – комфорт і зручність у дорозі.</div>
                <div className="home-page__info">🏨 Готелі – від бюджетних до преміум-класу.</div>
                <div className="home-page__text">
                    <p>Наша турфірма подбає, щоб з усіх обраних вами варіантів ви отримали найкращий і доступний у потрібні дати.</p>
                </div>
                <div className="home-page__text">
                    <p>Почніть просто зараз — натисніть <Link className="link" to={frontRoutes.navigate.buses}>Вибрати автобуси</Link> або <Link className="link" to={frontRoutes.navigate.buses}>Вибрати готелі</Link> та створіть свою ідеальну подорож!</p>
                </div>
            </div>
        </section>
    );
}

export default HomePage;