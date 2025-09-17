import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import { useEffect, useState } from 'react'

function Layout() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || '')
  const changeTheme = () => {
    setTheme(prev => (prev === 'темна' ? '' : 'темна'))
  }
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <div className={theme === 'темна' ? 'wrapper wrapper--dark-theme' : 'wrapper'}>
      <Header theme={theme} changeTheme={changeTheme} />
      <main className='main'>
        <div className="main__container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
