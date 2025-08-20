import { SelectedListContext } from "@/context/SelectedListContext";
import { useContext } from "react";
import { useLocation } from "react-router";

function Card({ item }) {
    const { pathname } = useLocation()
    const { dataSummary, addItem, removeItem } = useContext(SelectedListContext)
    const isSelected = dataSummary.some(el => el.id === item.id)

    const handlerClick = () => {
        if (pathname === '/hotels' || pathname === '/buses') (!isSelected) ? addItem(item) : removeItem(item.id)
        if (pathname === '/summary') {
            removeItem(item.id)
        }
    }
    const buttonTitle = pathname === '/summary' ? 'Видалити' : isSelected ? 'Відмінити' : 'Вибрати'
    return (
        <div className="card">
            <div className="card__box">
                <img src={item.image} alt="image" className="card__img" />
                <div className="card__info">
                    <div className="card__city">{item.name}</div>
                    {item.rating && item.name && (
                        <>
                            <div className="card__name">{item.city}</div>
                            <div className="card__rating">Рейтинг готеля {item.rating}</div>
                        </>
                    )}
                    <div className="card__price">Ціна: {item.price}грн</div>
                </div>
            </div>
            <button className="card__button" onClick={handlerClick}>{buttonTitle}</button>
        </div>
    );
}

export default Card;