import { useFilteredByPatientNameQuery } from "@/api"
import Loader from "@/components/Loader"
import AppointmentItem from "./AppointmentItem"
import { Link } from "react-router"
import { frontRoutes } from "@/router/frontRoutes"
import { useState } from "react"

function AppointmentsList() {
  const [searchByName, setSearchByName] = useState('')
  const { data: appointmentsData, isLoading, isError } = useFilteredByPatientNameQuery(searchByName)
  return (
    <div className="appointments-page">
      <h1 className="appointments-page__title">Список призначених зустрічей</h1>
      <div className="appointments-page__box">
        <Link
          to={frontRoutes.navigate.appointments.create}
          className="appointments-page__link">Записатися на прийом до лікаря
        </Link>
        <input
          value={searchByName}
          onChange={(e) => (setSearchByName(e.target.value))}
          placeholder="Пошук за ПІБ пацієнта"
          type="text"
          className="appointments-page__input" />
      </div>
      <div className="appointments-page__content">
        {isLoading && <Loader />}
        {isError && <div className="appointments-page__message">Помилка завантаження ...</div>}
        {appointmentsData?.length === 0 && <div className="appointments-page__message">Такого пацієнта немає ...</div>}
        {appointmentsData?.map(data => (
          <AppointmentItem
            data={data}
            key={data.id}>
          </AppointmentItem>
        ))}
      </div>
    </div>
  )
}

export default AppointmentsList