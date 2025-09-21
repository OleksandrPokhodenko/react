import { useGetAppointmentsQuery } from "@/api"
import Loader from "@/components/Loader"
import AppointmentItem from "./AppointmentItem"
import { Link } from "react-router"
import { frontRoutes } from "@/router/frontRoutes"

function AppointmentsList() {
  const { data: appointmentsData, isLoading, isError } = useGetAppointmentsQuery()
  return (
    <div className="appointments-page">
      <h1 className="appointments-page__title">Список призначених зустрічей</h1>
      <Link to={frontRoutes.navigate.appointments.create} className="appointments-page__link">Записатися на прийом до лікаря</Link>
      <div className="appointments-page__content">
        {isLoading && <Loader />}
        {isError && <div>Помилка завантаження ...</div>}
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