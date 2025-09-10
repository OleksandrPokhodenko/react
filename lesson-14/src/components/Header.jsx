import MainMenu from "./MainMenu";
import logo from '@/assets/img/logo.avif'

function Header({ theme, changeTheme }) {
    return (
        <div className="header">
            <div className="header__container">
                <img src={logo} alt="image" className="header__img" />
                <MainMenu />
                <button onClick={changeTheme} className="theme-button">{theme === 'dark' ? '☀️ light' : '🌙 dark'}</button>
            </div>
        </div>
    );
}

export default Header;