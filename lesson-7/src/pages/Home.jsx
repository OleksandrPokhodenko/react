function Home() {
    return (
        <div className="home-page">
            <div className="home-page__container">
                <h1 className="home-page__title">🛍️ Ласкаво просимо до TechStore – вашого магазину сучасної техніки!</h1>
                <h2 className="home-page__subtitle">У нас ви знайдете все, що потрібно для комфортного життя та роботи:</h2>
                <ul className="home-page__list">
                    <li className="home-page__item">💻 Ноутбуки та комп’ютери для навчання, офісу й геймінгу</li>
                    <li className="home-page__item">📱 Смартфони та гаджети найпопулярніших брендів</li>
                    <li className="home-page__item">🎧 Аудіотехніка для якісного звучання вдома та в дорозі</li>
                    <li className="home-page__item">📷 Фото- та відеотехніка для творчості та збереження спогадів</li>
                    <li className="home-page__item">🖥️ Монітори, периферія та аксесуари</li>
                </ul>
                <h2 className="home-page__subtitle">🎯 Ми пропонуємо:</h2>
                <ul className="home-page__list">
                    <li className="home-page__item">Тільки перевірені товари з гарантією</li>
                    <li className="home-page__item">Швидку доставку по Україні</li>
                    <li className="home-page__item">Зручні способи оплати</li>
                    <li className="home-page__item">Постійну підтримку клієнтів</li>
                </ul>
                <div className="home-page__info">✨ TechStore — техніка, яка працює на вас!</div>
                <div className="home-page__info">🛒 Обирайте зараз і замовляйте всього в кілька кліків!</div>
            </div>
        </div>
    );
}

export default Home;