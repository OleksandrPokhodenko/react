import { useState } from "react";
import Button from "../../components/Button";
import frontRoutes from "../../routes/frontRoutes";
import { useParams, useNavigate } from 'react-router'
import useTeachersApi from "../../hooks/useTeachersApi";
import { useEffect } from "react";

function TeachersForm() {
    const { id } = useParams()
    const [teacher, setTeacher] = useState({ name: '', subject: '', photo: '' })
    const { data: teachersList, loading, error, editTeacher, fetchTeachers, addTeacher } = useTeachersApi()
    const isEditing = !!id
    const navigate = useNavigate()
    useEffect(() => {
        fetchTeachers()
    }, [fetchTeachers])
    useEffect(() => {
        if (id && teachersList.length > 0) {
            const editingTeacher = teachersList.find(teacher => teacher.id === id)
            if (editingTeacher) setTeacher(editingTeacher)
        }
    }, [id, teachersList])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isEditing) {
            await editTeacher(id, teacher)
        }
        else {
            const newId = new Date().getTime()
            await addTeacher({ id: newId, ...teacher })
        }
        navigate(frontRoutes.navigate.teachers.index)
    }

    if (loading) return <Loader />
    if (error) return <div>Помилка завантаження</div>
    return (
        <div className="teachers-form-page">
            <div className="teachers-form-page__container">
                <form
                    onSubmit={handleSubmit}
                    className="teachers-form-page__form">
                    <h1 className="teachers-form-page__title">{isEditing ? 'Редагувати вчителя' : 'Додати нового вчителя'}</h1>
                    <label className="teachers-form-page__label">Ім`я
                        <input
                            onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
                            value={teacher.name}
                            required
                            placeholder="Введіть ім`я вчителя"
                            className="teachers-form-page__input"
                            type="text" />
                    </label>
                    <label className="teachers-form-page__label">Предмет
                        <input
                            onChange={(e) => setTeacher({ ...teacher, subject: e.target.value })}
                            value={teacher.subject}
                            required
                            placeholder="Введіть предмет викладача"
                            className="teachers-form-page__input"
                            type="text" />
                    </label>
                    <label className="teachers-form-page__label">Фото URL (не обов`язково)
                        <input
                            onChange={(e) => setTeacher({ ...teacher, photo: e.target.value })}
                            value={teacher.photo}
                            placeholder="Введіть URL фото (не обов`язково)"
                            className="teachers-form-page__input"
                            type="text" />
                    </label>
                    <div className="teachers-form-page__buttons">
                        <Button
                            type='submit'
                            color='green'
                            buttonTitle={isEditing ? 'Оновити вчителя' : 'Додати вчителя'}
                        />
                        <Button
                            color='grey'
                            buttonTitle='Скасувати'
                            path={frontRoutes.navigate.teachers.index}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TeachersForm;