import { routes } from '@/routes/router';
import { NavLink } from 'react-router'
function Navbar() {
    return (
        <nav className='menu'>
            <ul className='menu__list'>
                {routes[0].children.map((r, i) => (
                    <li key={i} className="menu__item">
                        <NavLink to={r.path ?? ''} className={({ isActive }) => (isActive ? 'active menu__link' : 'menu__link')}>
                            {r.handler?.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;