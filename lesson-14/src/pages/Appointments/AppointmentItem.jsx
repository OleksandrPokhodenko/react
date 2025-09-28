import { useDeleteAppointmentMutation, useGetDoctorsQuery, useGetPatientByIdQuery, useUpdateAppointmentMutation } from "@/api";
import { frontRoutes } from "@/router/frontRoutes";
import { useState } from "react";
import { useNavigate } from "react-router";

function AppointmentItem({ data }) {
    const date = new Date(data.date)
    const { data: patientData } = useGetPatientByIdQuery(data.patientId)
    const { data: doctorsData } = useGetDoctorsQuery()
    const doctorData = doctorsData?.find(doc => doc.id === data.doctorId)
    const navigate = useNavigate()
    const [deleting, setDeleting] = useState(false)
    const [saving, setSaving] = useState(false)
    const [deleteAppointment] = useDeleteAppointmentMutation()
    const [appointmentStatus, setAppointmentStatus] = useState(data.status)
    const [updateAppointment] = useUpdateAppointmentMutation()

    const handleChange = async (e) => {
        setSaving(true)
        const newStatus = e.target.value
        setAppointmentStatus(newStatus)
        try {
            await updateAppointment({ id: data.id, status: newStatus })
        } catch (error) {
            setSaving(false)
        }
        finally {
            setSaving(false)
        }
    }

    const onDelete = async () => {
        setDeleting(true)
        confirm('Видалити зустріч?')
        if (confirm) {
            try {
                await deleteAppointment(data.id)
            } catch (error) {
                setDeleting(false)
            }
        }
    }

    return (
        <div className="appointment-item">
            <div className="appointment-item__content">
                <div className="appointment-item__box">
                    <div className="appointment-item__patient">Пацієнт: {patientData?.fullName}</div>
                    <div className="appointment-item__doctor">Лікар: {doctorData?.fullName}</div>
                    <div className="appointment-item__date">Дата: {date.toLocaleString('uk-UA')}</div>
                    <div className="appointment-item__reason">Причина: {data.reason}</div>
                </div>
                <div className="appointment-item__status">
                    <label className="appointment-item__label">Статус:
                        {saving ? <span style={{ paddingLeft: '10px' }}>Збереження ...</span> :
                            <select
                                style={appointmentStatus === 'активний' ? { color: 'green', border: '2px solid green' } : { color: 'red', border: '2px solid red' }}
                                className="appointment-item__select"
                                value={appointmentStatus}
                                onChange={handleChange}>
                                <option className="appointment-item__option" value="активний">активний</option>
                                <option className="appointment-item__option appointment-item__option--red" value="завершено">завершено</option>
                            </select>
                        }
                    </label>
                </div>
            </div>
            <div className="appointment-item__action">
                <button onClick={() => navigate(frontRoutes.navigate.appointments.edit(data.id), { state: { doctorData, patientData } })}
                    className="appointment-item__link">Редагувати</button>
                <button onClick={onDelete} className="appointment-item__button">{deleting ? 'Видалення ...' : 'Видалити'}</button>
            </div>
        </div>
    );
}

export default AppointmentItem;