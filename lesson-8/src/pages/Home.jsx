import Button from '../components/Button';
import frontRoutes from '../routes/frontRoutes';

function Home() {
    return (
        <div className="home-page">
            <div className="home-page__container">
                <div className="home-page__box">
                    <h1 className="home-page__title">Ласкаво просимо до додатку "Вчителі!"</h1>
                    <div className="home-page__text">
                        <p>
                            Цей додаток допоможе вам керувати інформацією про вчителів, викликати іх на збори та дізнаватись інформацію про розробника.
                        </p>
                    </div>
                    <div className="home-page__buttons">
                        <Button
                            color={"green"}
                            path={frontRoutes.navigate.teachers.index}
                            buttonTitle={'Переглянути вчителів'}
                        />
                        <Button
                            color={"green"}
                            path={frontRoutes.navigate.meeting}
                            buttonTitle={'Переглянути список для зборів'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;