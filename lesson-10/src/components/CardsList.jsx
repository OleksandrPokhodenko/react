import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Card from "./Card";
import { CardListContext } from "@/context/CardListContext";
import { useLocation } from "react-router";
import { SelectedListContext } from "@/context/SelectedListContext";

function CardsList() {
    const { dataBuses, dataHotels } = useContext(CardListContext)
    const { theme } = useContext(ThemeContext)
    const { pathname } = useLocation()
    const { dataSummary } = useContext(SelectedListContext)

    let data
    if (pathname === '/buses') data = dataBuses
    if (pathname === '/hotels') data = dataHotels
    if (pathname === '/summary') data = dataSummary

    return (
        <div className={theme === 'dark' ? 'card-list card-list--dark-theme' : 'card-list'}>
            <ul className="card-list__list">
                {(data.length) ? data.map(item => (
                    <li key={item.id} className="card-list__item">
                        <Card item={item} />
                    </li>
                )) : <div className="card-list__info">Список порожній</div>}
            </ul>
        </div>
    );
}

export default CardsList;