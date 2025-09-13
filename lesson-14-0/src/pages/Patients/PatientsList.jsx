import { useGetFilteredPatientByNameQuery, useGetPatientsQuery } from '@/api'
import PatientItem from './PatientItem'
import { frontRoutes } from '@/router/frontRoutes'
import { Link } from 'react-router'
import Loader from '@/components/Loader'
import { useState } from 'react'

function PatientsList() {
  const { data: patientsList, isLoading, isError } = useGetPatientsQuery()
  const [inputName, setInputName] = useState('')
  const { data: filteredPatientsList, isLoading: filtering } = useGetFilteredPatientByNameQuery(inputName, { skip: !inputName })
  const dataPatients = inputName ? filteredPatientsList : patientsList

  return (
    <div className="patients-list">
      <h1 className="patients-list__title">
        Список пацієнтів
      </h1>
      <div className='patients-list__body'>
        <div className="patients-list__actions">
          <Link className='patients-list__link' to={frontRoutes.navigate.patients.create}>
            Додати нового паційнта
          </Link>
          <input
            placeholder='Пошук ...'
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            type="text"
            className="patients-list__input" />
        </div>
        {(isLoading || filtering) && <Loader />}
        {isError && <div className="patients-list__title">Помилка завантаження</div>}
        {dataPatients?.length === 0 ? <div className="patients-list__title">Список порожній</div> :
          <div className="patients-list__box">
            {dataPatients?.map((patientData) => (
              <PatientItem key={patientData.id} patientData={patientData} />
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default PatientsList
