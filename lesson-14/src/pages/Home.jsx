import { frontRoutes } from "@/router/frontRoutes"
import { Link } from "react-router"

function Home() {
  return <div className="home-page">
    <h1 className="home-page__title">Вітаємо у застосунку 'Клініка'</h1>
    <div className="home-page__links">
      <Link to={frontRoutes.navigate.patients.list} className="home-page__link">
        Перейти на сторінку пацієнта
      </Link>
      <Link to={frontRoutes.navigate.doctors.list} className="home-page__link">
        Перейти на сторінку лікаря
      </Link>
      <Link to={frontRoutes.navigate.appointments.list} className="home-page__link">
        Перейти на сторінку зустрічей
      </Link>
    </div>
  </div>
}

export default Home
