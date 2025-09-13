import { routes } from '@/router/routes'
import { NavLink } from 'react-router'

function getItemsForMainMenu(routesList, basePath) {
  const resList = []
  routesList.forEach((route) => {
    if (route?.meta?.labelForMainMenu)
      resList.push({
        path: route.index ? basePath : basePath + route.path,
        label: route.meta.labelForMainMenu,
      })
    if (route.children)
      resList.push(
        ...getItemsForMainMenu(
          route.children,
          basePath ? basePath + route.path + '/' : route.path
        )
      )
  })
  return resList
}

function MainMenu() {
  const itemsForMainMenu = getItemsForMainMenu(routes, '')
  return (
    <nav className='menu'>
      <ul className="menu__list">
        {itemsForMainMenu.map((item, index) => (
          <li className='menu__item' key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `
                ${isActive
                  ? 'menu__link menu__link--active'
                  : 'menu__link'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainMenu
