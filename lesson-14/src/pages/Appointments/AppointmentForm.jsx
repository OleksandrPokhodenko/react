import { useCreateAppointmentMutation, useGetAppointmentByIdQuery, useGetDoctorsQuery, useGetPatientsQuery, useUpdateAppointmentMutation } from "@/api"
import Loader from "@/components/Loader"
import { frontRoutes } from "@/router/frontRoutes"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router"

function AppointmentForm() {
  const { data: patientsData } = useGetPatientsQuery()
  const { data: doctorsData } = useGetDoctorsQuery()
  const { id } = useParams()
  const { data: appointmentData, isLoading } = useGetAppointmentByIdQuery(id, {
    skip: !id
  })
  const location = useLocation()
  const navigate = useNavigate()
  const doctorDataLocation = location.state?.doctorData
  const patientDataLocation = location.state?.patientData
  const [patientName, setPatientName] = useState(patientDataLocation?.fullName ?? '')
  const [doctorName, setDoctorName] = useState(doctorDataLocation?.fullName ?? '')
  const [reason, setReason] = useState('')
  const [createAppointment, { isLoading: creating }] = useCreateAppointmentMutation()
  const [updateAppointment, { isLoading: saving }] = useUpdateAppointmentMutation()
  const buttonTitle = id ? 'редагувати' : 'зберегти'
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    if (id && appointmentData) {
      setReason(appointmentData.reason ?? '')
      setDateTime(new Date(appointmentData.date).toISOString().slice(0, 16))
    }
  }, [appointmentData, id])

  const getId = (data, name) => {
    return data.find(person => person.fullName === name)?.id
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      status: id ? appointmentData.status : 'активний',
      reason: reason,
      patientId: getId(patientsData, patientName),
      doctorId: getId(doctorsData, doctorName),
      date: id ? dateTime : new Date(dateTime).toISOString()
    }
    if (id) await updateAppointment({ id, ...formData })
    else await createAppointment(formData)
    navigate(frontRoutes.navigate.appointments.list)
  }

  return <div className="appointment-form">
    <h1 className="appointment-form__title">Записи до лікаря</h1>
    {isLoading ? <Loader /> :
      <form onSubmit={onSubmit} className="appointment-form__form">
        <div className="appointment-form__select-block">
          <label className="appointment-form__label">Пацієнт:
            <select
              className="appointment-form__select"
              value={patientName}
              onChange={(e) => (setPatientName(e.target.value))}>
              <option disabled hidden value="">Обрати пацієнта</option>
              {patientsData?.map(p => (
                <option className="appointment-form__option" key={p.id} value={p.fullName}>{p.fullName}</option>
              ))}
            </select>
          </label>
          <label className="appointment-form__label">Лікар:
            <select
              className="appointment-form__select"
              value={doctorName}
              onChange={(e) => (setDoctorName(e.target.value))}>
              <option disabled hidden value="">Обрати лікаря</option>
              {doctorsData?.map(d => (
                <option className="appointment-form__option" key={d.id} value={d.fullName}>{d.fullName}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="appointment-form__input-block">
          <label className="appointment-form__label">Скарги:
            <input
              className="appointment-form__input"
              type="text"
              value={reason}
              onChange={(e) => (setReason(e.target.value))}
              placeholder="На що скаржетесь?" />
          </label>
          <label className="appointment-form__label">Дата і час прийому
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="appointment-form__input"
            />
          </label>
        </div>
        <button type="submit" className="appointment-form__button">{creating || saving ? 'збереження ...' : buttonTitle}</button>
      </form>
    }
  </div>
}

export default AppointmentForm
