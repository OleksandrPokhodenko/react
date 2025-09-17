import { useGetDoctorsQuery, useGetPatientByIdQuery } from "@/api";

function AppointmentItem({ data }) {
    const date = new Date(data.date)
    const { data: patientData } = useGetPatientByIdQuery(data.patientId)
    const { data: doctorsData } = useGetDoctorsQuery()
    const doctor = doctorsData?.filter(doc => doc.id === data.doctorId)

    return (
        <div className="appointment-item">
            <div className="appointment-item__content">
                <div className="appointment-item__box">
                    <div className="appointment-item__patient">Пацієнт: {patientData?.fullName}</div>
                    <div className="appointment-item__doctor">Лікар: {doctor?.[0].fullName}</div>
                    <div className="appointment-item__date">Дата: {date.toLocaleString('uk-UA')}</div>
                    <div className="appointment-item__reason">Причина: {data.reason}</div>
                </div>
                <div className="appointment-item__status">Статус: {data.status}</div>
            </div>
            <div className="appointment-item__action">
                <button className="appointment-item__link">Редагувати</button>
                <button className="appointment-item__button">Видалити</button>
            </div>
        </div>
    );
}

export default AppointmentItem;