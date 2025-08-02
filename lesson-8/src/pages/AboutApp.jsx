import Button from "../components/Button";
import frontRoutes from "../routes/frontRoutes";
function AboutApp() {
    return (
        <div className="about-app-page">
            <div className="about-app-page__container">
                <div className="about-app-page__box">
                    <h1 className="about-app-page__title">Про додаток "Вчителі"</h1>
                    <Button
                        color={"green"}
                        path={frontRoutes.navigate.home}
                        buttonTitle={'На головну'} />
                </div>
            </div>
        </div>
    );
}

export default AboutApp;