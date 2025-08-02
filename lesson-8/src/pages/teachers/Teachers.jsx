import { useState } from "react";
import Button from "../../components/Button";
import frontRoutes from "../../routes/frontRoutes";
import { useNavigate } from 'react-router'
import TeacherCard from "./TeacherCard";
import useTeachersApi from "../../hooks/useTeachersApi";
import { useEffect } from "react";

function Teachers() {
    const navigate = useNavigate()
    const { data: teachersList, error, loading, fetchTeachers } = useTeachersApi()
    const [selectedTeachersId, setSelectedTeachersId] = useState([])
    useEffect(() => {
        fetchTeachers()
    }, [fetchTeachers])
    const onSelect = (id) => {
        if (selectedTeachersId.includes(id)) {
            setSelectedTeachersId((prev) => prev.filter(tId => tId !== id))
        }
        else setSelectedTeachersId((prev) => [...prev, id])
    }

    let content
    if (loading) content = <h2>Завнтаження...</h2>
    if (error) content = <h2>Помилка завантаження</h2>
    else content = (
        <ul className="teachers-page__list">
            {teachersList.map(teacher => (
                <li key={teacher.id} className="teachers-page__item">
                    <TeacherCard
                        teacher={teacher}
                        isSelected={selectedTeachersId.includes(teacher.id)}
                        onSelect={onSelect}
                    />
                    <div className="teachers-page__buttons">
                        <Button
                            color='blue'
                            path={frontRoutes.navigate.teachers.edit(teacher.id)}
                            buttonTitle='Редагувати'
                        />
                        <Button
                            color='red'
                            path={frontRoutes.navigate.teachers.edit(teacher.id)}
                            buttonTitle='Видалити'
                        />
                    </div>
                </li>
            ))}
        </ul>
    )

    return (
        <div className="teachers-page">
            <div className="teachers-page__container">
                <div className="teachers-page__box">
                    <h1 className="teachers-page__title">Список вчителів</h1>
                    <div className="teachers-page__buttons">
                        <Button
                            color='green'
                            path={frontRoutes.navigate.teachers.add}
                            buttonTitle='Додати нового вчителя'
                        />
                        <Button
                            onClick={onSelect}
                            color='blue'
                            buttonTitle={`Викликати ${selectedTeachersId.length} вчителів на збори`}
                        />
                    </div>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Teachers;