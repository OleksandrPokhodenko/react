import { useDeletePatientMutation, useGetPatientByIdQuery } from "@/api";
import Loader from "@/components/Loader";
import { frontRoutes } from "@/router/frontRoutes";
import { useNavigate, useParams } from "react-router";

function PatientDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: patientData, isLoading } = useGetPatientByIdQuery(id)
    const [deletePatient, { isLoading: isLoadingOnDelete }] = useDeletePatientMutation()
    const goToPatientEdit = () => {
        navigate(frontRoutes.navigate.patients.edit(id))
    }
    const onDeletePatient = async () => {
        await deletePatient(id)
        navigate(frontRoutes.navigate.patients.list)
    }
    return isLoading ? <Loader /> : (
        <div className="patient-details">
            <h1 className="patient-details__title">Інформація про пацієнта</h1>
            <div className="patient-details__info">
                <div className='patient-details__name'>Ім`я: {patientData.fullName}</div>
                <div className="patient-details__phone">Телефон: {patientData.phone}</div>
                <div className="patient-details__email">Email: {patientData.email}</div>
                <div className="patient-details__date">Дата народження: {patientData.birthDate}</div>
                <div className="patient-details__address">Місце проживання: {patientData.address}</div>
                <div className="patient-details__notes">{patientData.notes ? `Діагноз: ${patientData.notes}` : ''}</div>
            </div>
            <div className="patient-details__actions">
                <button
                    onClick={() => navigate(frontRoutes.navigate.patients.list)}
                    className="patient-details__button">До списку пацієнтів</button>
                <button
                    onClick={goToPatientEdit}
                    className="patient-details__button">Редагувати</button>
                <button
                    onClick={onDeletePatient}
                    className="patient-details__button patient-details__button--red">{isLoadingOnDelete ? 'Видаляється ...' : 'Видалити'}</button>
            </div>
        </div>
    );
}

export default PatientDetails;