import { useGetDoctorsQuery } from '@/api'
import { frontRoutes } from '@/router/frontRoutes'
import { Link } from 'react-router'
import Loader from '@/components/Loader'
import DoctorItem from './DoctorItem'
function DoctorsList() {
  const { data: doctorsList, isLoading } = useGetDoctorsQuery()

  return (
    <div className="doctors-list">
      <h1 className="doctors-list__title">
        Список лікарів
      </h1>
      <div className='doctors-list__body'>
        <Link className='doctors-list__link' to={frontRoutes.navigate.doctors.create}>
          Додати нового лікаря
        </Link>
        {isLoading && <Loader />}
        <div className="doctors-list__box">
          {doctorsList?.map((doctorData) => (
            <DoctorItem key={doctorData.id} doctorData={doctorData} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorsList


