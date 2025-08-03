import TeacherCard from "./teachers/TeacherCard";
import { useLocation } from 'react-router'
import Button from "../components/Button";
import frontRoutes from "../routes/frontRoutes";
function Meeting() {
    const { state } = useLocation()
    let content
    if (state?.teachers) content = (
        <ul className="meeting-page__list">
            {state.teachers.map(teacher => (
                <li key={teacher.id} className="meeting-page__item">
                    <TeacherCard
                        teacher={teacher}
                    />
                </li>
            ))}
        </ul>
    )
    else content = <h2 className="meeting-page__subtitle">Вчителів не знайдено</h2>

    return (
        <div className="meeting-page">
            <div className="meeting-page__container">
                <h1 className="meeting-page__title">Учасники сборів</h1>
                <h2 className="meeting-page__subtitle">{`Список вчителів  для виклику на збори`}</h2>
                {content}
                <div className="button-box">
                    <Button
                        color='green'
                        path={frontRoutes.navigate.teachers.index}
                        buttonTitle='Повернутись до списку вчителів'
                    />
                </div>
            </div>
        </div>
    );
}

export default Meeting