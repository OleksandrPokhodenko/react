import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function Footer() {
    const { theme } = useContext(ThemeContext)
    return (
        <footer className={theme === 'dark' ? 'footer footer--dark-theme' : 'footer'}>
            <div className="decor"></div>
            <div className="footer__container">
                <h2 className="footer__copy">© 2025 Всі права захищені</h2>
            </div>
        </footer>
    );
}

export default Footer;