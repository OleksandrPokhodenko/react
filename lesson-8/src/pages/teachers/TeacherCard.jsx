function TeacherCard({ teacher, onSelect, isSelected }) {
    return (
        <div
            className={isSelected ? 'card card--green' : 'card card--grey'}>
            <div className="card__content">
                <div className="card__img">
                    <img src={teacher.photo} alt="Img" />
                </div>
                <div className="card__box">
                    <h2 className="card__title">{teacher.name}</h2>
                    <div className="card__subject">Предмет:{teacher.subject}</div>
                </div>
            </div>
            <div className="card__button">
                {onSelect ? (
                    <div
                        className={isSelected ? 'button button--blue' : 'button button--green'}
                        onClick={() => onSelect(teacher.id)}>
                        {isSelected ? 'Вибрано' : 'Вибрати на збори'}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default TeacherCard;