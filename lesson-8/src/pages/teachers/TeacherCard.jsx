function TeacherCard({ teacher, onSelect, isSelected }) {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__img">
                    <img src={teacher.photo} alt="Image" />
                </div>
                <div className="card__box">
                    <h2 className="card__title">{teacher.name}</h2>
                    <div className="card__subject">Предмет:{teacher.subject}</div>
                </div>
            </div>
            <div className="card__button">
                {onSelect ? (
                    <button
                        className={isSelected ? 'button button--blue' : 'button button--green'}
                        onClick={() => onSelect(teacher.id)}>
                        {isSelected ? 'Вибрано' : 'Вибрати на збори'}
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default TeacherCard;