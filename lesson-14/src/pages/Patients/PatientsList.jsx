import { useGetPatientsQuery } from '@/api'
import PatientItem from './PatientItem'
import { frontRoutes } from '@/router/frontRoutes'
import { Link } from 'react-router'
import Loader from '@/components/Loader'

function PatientsList() {
  const { data: patientsList, isLoading } = useGetPatientsQuery()

  return (
    <div className="patients-list">
      <h1 className="patients-list__title">
        Список пацієнтів
      </h1>
      <div className='patients-list__body'>
        <Link className='patients-list__link' to={frontRoutes.navigate.patients.create}>
          Додати нового паційнта
        </Link>
        {isLoading && <Loader />}
        <div className="patients-list__box">
          {patientsList?.map((patientData) => (
            <PatientItem key={patientData.id} patientData={patientData} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PatientsList
