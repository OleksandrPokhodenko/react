import { useDeletePatientMutation } from '@/api'
import { frontRoutes } from '@/router/frontRoutes'
import { useState } from 'react'
import { Link } from 'react-router'
function PatientItem({ patientData }) {
  const [deletePatient] = useDeletePatientMutation()
  const [deleting, setDeleting] = useState(false)
  const onDelete = async () => {
    setDeleting(true)
    try {
      await deletePatient(patientData.id)
    }
    catch {
      setDeleting(false)
    }
  }
  return (
    <div className="patient">
      <div className="patient__info">
        <div className='patient__name'>Ім`я: {patientData.fullName}</div>
        <div className="patient__phone">Телефон: {patientData.phone}</div>
      </div>
      <div className="patient__actions">
        <Link className='patient__link' to={frontRoutes.navigate.patients.edit(patientData.id)}>Редагувати</Link>
        <Link className='patient__link' to={frontRoutes.navigate.patients.details(patientData.id)}>Про пацієнта</Link>
        <button className="patient__button" onClick={onDelete}>{deleting ? 'Видалення ...' : 'Видалити'}</button>
      </div>
    </div>
  )
}

export default PatientItem
