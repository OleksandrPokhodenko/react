function Contacts() {
    return (
        <div className="contacts-page">
            <div className="contacts-page__container">
                <h1 className="contacts-page__title">📞 Контакти</h1>
                <h2 className="contacts-page__subtitle">Маєте запитання чи потребуєте консультації? Ми завжди раді допомогти!</h2>
                <h2 className="contacts-page__title">🏢 Адреса офісу:</h2>
                <address>
                    <div className="contacts-page__text">ТОВ “TechStore”</div>
                    <div className="contacts-page__text">вул. Електроніки, 12</div>
                    <div className="contacts-page__text">Київ, Україна, 01001</div>
                </address>
                <h2 className="contacts-page__title">📱 Телефони:</h2>
                <h3 className="contacts-page__subtitle">Гаряча лінія:</h3>
                <address>
                    <ul className="payment-page__list">
                        <li className="payment-page__item">
                            <a className="payment-page__link" href="tel:0800123456 ">📞 0 800 123 456</a><span> — безкоштовно по Україні</span>
                        </li>
                        <li className="payment-page__item">
                            <a className="payment-page__link" href="tel:+380991234567">📞 +38(099) 123 45 67</a><span>— мобільний</span>
                        </li>
                    </ul>
                </address>
                <div className="contacts-page__text">Графік роботи:</div>
                <div className="contacts-page__text">Пн–Пт: 9:00–18:00</div>
                <div className="contacts-page__text">Сб–Нд: вихідні</div>
                <h2 className="contacts-page__title">📧 Email:</h2>
                <h3 className="contacts-page__subtitle">Для загальних питань:</h3>
                <address>
                    <a className="payment-page__link payment-page__link--margin" href="info@techstore.ua">✉️ info@techstore.ua</a>
                </address>
                <h3 className="contacts-page__subtitle">З питань обслуговування замовлень:</h3>
                <address>
                    <a className="payment-page__link payment-page__link--margin" href="mailto:support@example.com">✉️ support@example.com</a>
                </address>
                <h2 className="contacts-page__title">💬 Соціальні мережі:</h2>
                <h3 className="contacts-page__subtitle">Ми онлайн 24/7 — підписуйтесь, щоб дізнаватися про новинки та акції:</h3>
                <address>
                    <ul className="contacts-page__list">
                        <li className="contacts-page__item">
                            <a href="#" className="contacts-page__link">Facebook</a>
                        </li>
                        <li className="contacts-page__item">
                            <a href="#" className="contacts-page__link">Instagram</a>
                        </li>
                        <li className="contacts-page__item">
                            <a href="#" className="contacts-page__link">Telegram</a>
                        </li>
                    </ul>
                </address>
                <div className="contacts-page__info">🛠 Також ви можете скористатися формою зворотного зв’язку на сайті — ми відповімо протягом 24 годин.</div>
            </div>
        </div>
    );
}

export default Contacts;