function Payment() {
    return (
        <div className="payment-page">
            <div className="payment-page__container">
                <h1 className="payment-page__title">💳 Способи оплати</h1>
                <div className="payment-page__info">Ми пропонуємо зручні та безпечні способи оплати:</div>
                <ul className="payment-page__list">
                    <li className="payment-page__item">Оплата банківською карткою (Visa/MasterCard):
                        Оплата здійснюється онлайн через захищений платіжний сервіс. Дані картки не зберігаються на нашому сервері.</li>
                    <li className="payment-page__item">Оплата при отриманні (накладений платіж):
                        Ви оплачуєте замовлення готівкою або картою при отриманні у відділенні «Нова пошта» або при кур'єрській доставці.</li>
                    <li className="payment-page__item">Безготівковий розрахунок (для юридичних осіб):
                        Після підтвердження замовлення ми надішлемо рахунок-фактуру для оплати через банк.</li>
                </ul>
                <div className="payment-page__info">⏱ Термін оплати</div>
                <ul className="payment-page__list">
                    <li className="payment-page__item">Для онлайн - оплати: замовлення вважається підтвердженим після успішної транзакції.</li>
                    <li className="payment-page__item">Для безготівкового розрахунку: термін оплати — 3 робочі дні з моменту виставлення рахунку.</li>
                    <li className="payment-page__item">Для оплати при отриманні: оплата здійснюється одразу при доставці товару.</li>
                </ul>
                <div className="payment-page__info">⚠️ Умови</div>
                <ul className="payment-page__list">
                    <li className="payment-page__item">У разі несплати замовлення у визначені терміни воно може бути автоматично скасоване.</li>
                    <li className="payment-page__item">Ми залишаємо за собою право запросити підтвердження особистості або платоспроможності у разі великих замовлень.</li>
                </ul>
                <div className="payment-page__info">❓ Якщо виникли питання</div>
                <div className="payment-page__info">Звертайтеся до нашої служби підтримки:</div>
                <address>
                    <ul className="payment-page__list">
                        <li className="payment-page__item">
                            <a className="payment-page__link" href="mailto:support@example.com">📧 Email: support @example.com</a>
                        </li>
                        <li className="payment-page__item">
                            <a className="payment-page__link" href="tel:+380991234567">📞 Телефон: +38(099) 123 45 67</a>
                        </li>
                    </ul>
                </address>
                <div className="payment-page__info">🔐 Безпека:</div>
                <div className="payment-page__info">Ми використовуємо сучасні протоколи шифрування для гарантування безпечної оплати та захисту ваших персональних даних.</div>
                <div className="payment-page__info">✅ Купуйте зручно та безпечно разом з нами!</div>
            </div>
        </div>

        /*
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        */
    );
}

export default Payment