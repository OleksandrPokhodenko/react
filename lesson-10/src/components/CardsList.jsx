import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function CardsList() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme === 'dark' ? 'dark-theme' : ''}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis sequi ad similique consequatur repudiandae alias rem, velit, doloribus rerum voluptas cumque ratione ullam iusto totam ex maiores sint debitis?</p>
        </div>
    );
}

export default CardsList;