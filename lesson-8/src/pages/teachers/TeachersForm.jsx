import Button from "../../components/Button";
import frontRoutes from "../../routes/frontRoutes";

function TeachersForm() {
    let title
    return (
        <div className="teachers-form-page">
            <div className="teachers-form-page__container">
                <div className="teachers-form-page__box">
                    <h1 className="teachers-form-page__title">{title}</h1>
                    <label className="teachers-form-page__label">
                        <input className="teachers-form-page__input" type="text" />
                    </label>
                    <label className="teachers-form-page__label">
                        <input className="teachers-form-page__input" type="text" />
                    </label>
                    <label className="teachers-form-page__label">
                        <input className="teachers-form-page__input" type="text" />
                    </label>
                    <div className="teachers-form-page__buttons">
                        <Button
                            color='green'
                            buttonTitle=''
                            path={frontRoutes.navigate.teachers.index}
                        />
                        <Button
                            color='grey'
                            buttonTitle='Скасувати'
                            path={frontRoutes.navigate.teachers.index}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeachersForm;