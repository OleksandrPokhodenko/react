import { useContext } from "react";
import Navbar from "@/layouts/components/Navbar";
import { ThemeContext } from "@/context/ThemeContext";

function Header() {
    const { theme, changeTheme } = useContext(ThemeContext)
    return (
        <header className={theme === 'dark' ? 'header dark-theme' : 'header'}>
            <div className="header__container">
                <Navbar />
                <button className="header__button" onClick={changeTheme}>
                    {theme === "dark" ? '☀️ Світла' : '🌙 Темна'}
                </button>
            </div>
        </header>
    );
}

export default Header;