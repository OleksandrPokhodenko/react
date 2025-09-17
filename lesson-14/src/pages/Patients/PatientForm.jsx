import { useNavigate, useParams } from 'react-router'
import {
  useGetPatientByIdQuery,
  useUpdatePatientMutation,
  useCreatePatientMutation,
} from '@/api'
import { patientInputFields, emptyPatientData } from './settings'
import { useEffect, useState } from 'react'
import { frontRoutes } from '@/router/frontRoutes'
import Loader from '@/components/Loader'

function PatientForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: patientData, isLoading } = useGetPatientByIdQuery(id, {
    skip: !id,
  })
  const [updatePatient, { isLoading: saving }] = useUpdatePatientMutation()
  const [createPatient, { isLoading: creating }] = useCreatePatientMutation()

  const [formData, setFormData] = useState(() => emptyPatientData)

  useEffect(() => {
    if (patientData) setFormData(patientData)
  }, [patientData])

  const saveButtonTitle = id ? 'Зберегти' : 'Створити'

  const handleInput = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  const onSave = async (e) => {
    e.preventDefault()
    if (id) await updatePatient(formData)
    else await createPatient(formData)
    navigate(frontRoutes.navigate.patients.list)
  }

  return (
    <div className='patient-form'>
      <h2 className='patient-form__title'>Форма пацієнта</h2>
      {isLoading && <Loader />}
      {!isLoading && (
        <form className='patient-form__form' onSubmit={onSave}>
          {patientInputFields.map((field, index) => (
            <div className='patient-form__box' key={index}>
              <input
                className='patient-form__input'
                {...field}
                value={formData[field.name]}
                onChange={handleInput}
              />
            </div>
          ))}
          <button className='patient-form__button' type="submit">
            {saving || creating ? 'Збереження...' : saveButtonTitle}
          </button>
        </form>
      )}
    </div>
  )
}

export default PatientForm
