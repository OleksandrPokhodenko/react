import frontRoutes from '../routes/frontRoutes';
import { NavLink } from 'react-router'
function Navbar() {
    return (
        <nav>
            <ul className='menu'>
                <li>
                    <NavLink
                        to={frontRoutes.pages.home} className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
                        Головна
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={frontRoutes.pages.products.index} className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
                        Магазин
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={frontRoutes.pages.payment} className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
                        Правила оплати
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={frontRoutes.pages.contacts} className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>
                        Контакти
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;