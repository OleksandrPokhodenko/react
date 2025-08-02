import { NavLink } from 'react-router'
import frontRoutes from '../../routes/frontRoutes';
function Navbar() {
    return (
        <ul className="menu">
            <li className="menu__item">
                <NavLink to={frontRoutes.navigate.home} className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
                    Головна
                </NavLink>
            </li>
            <li className="menu__item">
                <NavLink to={frontRoutes.navigate.teachers.index} className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
                    Вчителі
                </NavLink>
            </li>
            <li className="menu__item">
                <NavLink to={frontRoutes.navigate.meeting} className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
                    Збори
                </NavLink>
            </li>
            <li className="menu__item">
                <NavLink to={frontRoutes.navigate.aboutApp} className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
                    Про додаток
                </NavLink>
            </li>
            <li className="menu__item">
                <NavLink to={frontRoutes.navigate.aboutDev} className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
                    Про розробника
                </NavLink>
            </li>
        </ul>
    );
}

export default Navbar;