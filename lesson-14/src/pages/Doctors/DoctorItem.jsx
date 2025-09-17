import { useDeleteDoctorMutation } from '@/api'
import { frontRoutes } from '@/router/frontRoutes'
import { useState } from 'react'
import { useNavigate } from 'react-router'
function DoctorItem({ doctorData }) {
    const [deleteDoctor] = useDeleteDoctorMutation()
    const navigate = useNavigate()
    const [deleting, setDeleting] = useState(false)
    const onDelete = async () => {
        setDeleting(true)
        try {
            await deleteDoctor(doctorData.id)
        }
        catch {
            setDeleting(false)
        }
    }
    const goToEditDoctor = () => {
        navigate(frontRoutes.navigate.doctors.edit(doctorData.id), { state: { doctorData } })
    }

    return (
        <div className="doctor">
            <div className="doctor__info">
                <div className='doctor__name'>Ім`я: {doctorData.fullName}</div>
                <div className="doctor__phone">Телефон: {doctorData.phone}</div>
                <div className="doctor__email">Email: {doctorData.email}</div>
                <div className="doctor__specialty">Спеціалізація лікаря: {doctorData.specialty}</div>
                <div className='doctor__room'>Кабінет: {doctorData.room}</div>
                <div className='doctor__notes'>{doctorData.notes ? `Додаткова інформація: ${doctorData.notes}` : ''}</div>
            </div>
            <div className="doctor__actions">
                <button className='doctor__link' onClick={goToEditDoctor}>Редагувати</button>
                <button className="doctor__button" onClick={onDelete}>{deleting ? 'Видалення ...' : 'Видалити'}</button>
            </div>
        </div>
    )
}

export default DoctorItem;