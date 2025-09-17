import { useLocation, useNavigate, useParams } from "react-router"
import { doctorInputFields, emptyDoctorData } from "./settings"
import { useCreateDoctorMutation, useUpdateDoctorMutation } from "@/api"
import { useEffect, useState } from "react"
import { frontRoutes } from "@/router/frontRoutes"

function DoctorForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const doctorDataLocation = location.state?.doctorData
  const [updateDoctor, { isLoading: saving }] = useUpdateDoctorMutation()
  const [createDoctor, { isLoading: creating }] = useCreateDoctorMutation()

  const [formData, setFormData] = useState(() => emptyDoctorData)

  const buttonTitle = id ? 'Редагувати' : 'Створити'

  useEffect(() => {
    if (id && doctorDataLocation) setFormData(doctorDataLocation)
  }, [doctorDataLocation])

  const handleInput = (e) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const onSave = async (e) => {
    e.preventDefault()
    if (id) await updateDoctor(formData)
    else await createDoctor(formData)
    navigate(frontRoutes.navigate.doctors.list)
  }

  return (
    <div className="doctor-form-page">
      <h1 className="doctor-form-page__title">Форма лікаря</h1>
      <form onSubmit={onSave} className="doctor-form-page__form">
        {doctorInputFields.map((field, index) => (
          <div key={index} className="doctor-form-page__box">
            <input
              className="doctor-form-page__input"
              {...field}
              value={formData[field.name]}
              onChange={handleInput}
            />
          </div>
        ))}
        <button type="submit" className="doctor-form-page__button">{saving || creating ? 'Збереження ...' : buttonTitle}</button>
      </form>
    </div>
  )
}

export default DoctorForm
